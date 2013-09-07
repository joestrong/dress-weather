var WeatherView = Backbone.View.extend({

    tagName: 'div',

    model: new WeatherModel(),

    getWeatherHtml: function(data){
        var that = this;
        var conditions = data.current_condition[0],
        html = '';
        html += '<p>' + conditions.weatherDesc[0].value + '</p><img src="' + conditions.weatherIconUrl[0].value + '"/>';
        that.render(html);
    },

    render: function(html) {
        this.$el.html(html);
    }

});

var ClothesListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function() {
        this.listenTo(this.collection, "add", this.render);
        this.render();
    },

    render: function() {
        var that = this;
        this.$el.html('');
        _.each(this.collection.models, function(model){
            that.$el.append('<li>' + model.get('title') + '</li>');
        });
    }

});

var AppView = Backbone.View.extend({

    el: $('.app'),

    initialize: function() {

        var location;
       
        var onSuccess = function(position) {

            location = position.coords.latitude+','+position.coords.longitude;
            blah();

        };

        // onError Callback receives a PositionError object
        //
        function onError(error) {
            location = 'bournemouth';
            blah();
        }

       navigator.geolocation.getCurrentPosition(onSuccess, onError);

        var that = this;
        this.$el.html('');

        function blah(){

            //get weather data
            var weatherModel = new WeatherModel();
            weatherModel.getWeatherData(location, function(data){
                    //build weather html
                    var weatherView = new WeatherView();
                    weatherView.getWeatherHtml(data);
                    that.$el.append(weatherView.el);

                    //filter clothes list
                    var clothesCollection = new ClothesCollection(config.clothes);
                    clothesCollection.filter(data, function(){
                        var clotheslist = new ClothesListView({ collection: clothesCollection });
                        that.$el.append(clotheslist.el);
                    });
            });
        }
    }
});