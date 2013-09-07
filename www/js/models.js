var WeatherModel = Backbone.Model.extend({
    getWeatherData: function(location, callback){
        var that = this;
        $.ajax({
            dataType: config.ajaxType,
            url: "http://api.worldweatheronline.com/free/v1/weather.ashx?key=h8dtfkhry55kdzesyj9r58ph&num_of_days=3&q="+location+"&format=json",
            success: function (data) {
                var result = data.data,
                    current = result.current_condition[0];
                var ourWeather = {
                    precipitation: current.precipMM,
                    windSpeed: current.windspeedKmph,
                    hourOfDay: helper.getHoursFromDate(current.observation_time)
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
        current_weather_condition = data.current_condition[0];

        console.log(data);

        _.each(this.models, function(model){
            
            var match = true;
            _.each(model.get('conditions'), function(condition){
                
                switch(condition.operator){
                    case '>':
                    if(parseInt(current_weather_condition[condition.title]) < parseInt(condition.value)){
                        match = false;
                    }
                    break;
                     case '<':
                    if(parseInt(current_weather_condition[condition.title]) > parseInt(condition.value)){
                        match = false;
                    }
                    break;
                     case '=':
                    if(parseInt(current_weather_condition[condition.title]) !== parseInt(condition.value)){
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