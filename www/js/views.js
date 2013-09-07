var WeatherView = Backbone.View.extend({

    tagName: 'div',

    className: 'WeatherWidget',

    model: new WeatherModel(),

    getWeatherHtml: function(data){
        var that = this;
        html = '';
        html += '<img src="' + data.weatherIconUrl[0].value + '"/>';
        if(data.queryType.toLowerCase() == 'latlon'){
            html += '<p><strong>Current Location</strong></p>';
        }else{
            html += '<p><strong>' + data.query + '</strong></p>';
        }
        html += '<p>' + data.description + '</p>';
        html += '<p>Last updated: ' + data.observationTime + '</p>';
        that.render(html);
    },

    render: function(html) {
        this.$el.html(html);
    }

});

var ClothesListView = Backbone.View.extend({

    tagName: 'ul',

    className: 'ClothesList',

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
            location = 'springfield';
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
                        that.$el.append('<p class="ListTitle"><strong>You will need these items:</strong></p>');
                        that.$el.append(clotheslist.el);
                    });
            });
        }
    }
});