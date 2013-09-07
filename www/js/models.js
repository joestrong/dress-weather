var WeatherModel = Backbone.Model.extend({
    getWeatherData: function(location, callback){
        var that = this;
        $.ajax({
            dataType: config.ajaxType,
            url: "http://api.worldweatheronline.com/free/v1/weather.ashx?key=h8dtfkhry55kdzesyj9r58ph&num_of_days=3&q="+location+"&format=json",
            success: function (data) {
                var result = data.data.current_condition[0];
                console.log(data);
                var ourWeather = {
                    precipitation: result.precipMM,
                    windSpeed: result.windspeedKmph,
                    hourOfDay: helper.getHoursFromDate(result.observation_time),
                    observationTime: result.observation_time,
                    cloudcover : result.cloudcover,
                    humidity : result.humidity,
                    temp_C : result.temp_C,
                    query: data.data.request[0].query,
                    description: result.weatherDesc[0].value,
                    icon: result.weatherIconUrl[0].value
                };
                for(var i in ourWeather){
                    result[i] = ourWeather[i];
                }
                console.log(result);
                callback(result);
            },
            error: function(data){
                document.write('error getting api');
                document.write(data);
            }
        });
    }
});

var ClothesModel = Backbone.Model.extend({
    attributes: [
        'title',
        'conditions'
    ]
});

var ClothesCollection = Backbone.Collection.extend({
    model: ClothesModel,
    filter: function(data, callback){
        var that = this;
        var removeThese = new Array();
        current_weather_condition = data;

        _.each(this.models, function(model){
            
            var match = true;
            _.each(model.get('conditions'), function(condition){
                
                theirValue = parseFloat(current_weather_condition[condition.title]);
                ourValue = parseFloat(condition.value);

                switch(condition.operator){
                    case '>':
                    if(theirValue < ourValue){
                        match = false;
                    }
                    break;
                     case '<':
                    if(theirValue > ourValue){
                        match = false;
                    }
                    break;
                     case '=':
                    if(theirValue === ourValue){
                        match = false;
                    }
                    break;
                }
            });

            if(match === false){
                removeThese.push(model);
                console.log("removed"+model.get('title'))
            }
            
        });
        this.remove(removeThese);
       
        console.log(this.models);
        callback();
       
    }
});