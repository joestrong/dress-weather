var WeatherModel = Backbone.Model.extend({
    attributes: [
        'weatherData'
    ],
    getWeatherData: function(location, callback){
        var that = this;
        $.ajax({
            dataType: config.ajaxType,
            url: "http://api.worldweatheronline.com/free/v1/weather.ashx?key=h8dtfkhry55kdzesyj9r58ph&q=belfast&format=json",
            success: function (data) {
                var result = data.data;
                that.set('weatherData', result);
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
        current_weather_condition = data.current_condition[0];

        _.each(this.models, function(model){
            
            var match = true;
            _.each(model.get('conditions'), function(condition){
                
                switch(condition.operator){
                    case '>':
                    if(!condition.value > current_weather_condition[condition.title]){
                        match = false;
                    }
                    break;
                     case '<':
                    if(!condition.value < current_weather_condition[condition.title]){
                        match = false;
                    }
                    break;
                     case '=':
                    if(!condition.value == current_weather_condition[condition.title]){
                        match = false;
                    }
                    break;
                }
            });

            if(match === false){
                that.remove(model);
                console.log("removed"+model.get('title'))
            }
            
        })
        console.log(this.models);
    }
});