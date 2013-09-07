var WeatherModel = Backbone.Model.extend({
    getWeatherData: function(location, callback){
        $.ajax({
            dataType: 'jsonp',
            url: "http://api.worldweatheronline.com/free/v1/weather.ashx?key=h8dtfkhry55kdzesyj9r58ph&q=belfast&format=json",
            success: function (data) {
                var result = data.data;
                callback(result);
            },
            error: function(data){
                console.log('could not get weather');
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
    model: ClothesModel
});