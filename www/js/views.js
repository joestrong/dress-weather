var WeatherView = Backbone.View.extend({

    tagName: 'div',

    model: new WeatherModel(),

    initialize: function() {
        this.getWeatherHtml();
    },

    getWeatherHtml: function(){
        var that = this;
        var location = {};
        this.model.getWeatherData(location, function(data){
            console.log(data);
            var conditions = data.current_condition[0],
                html = '';
            html += '<p>' + conditions.weatherDesc[0].value + '</p><img src="' + conditions.weatherIconUrl[0].value + '"/>';
            that.render(html);
        });
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
        this.render();
    },

    render: function() {
        this.$el.html('');
        var weatherView = new WeatherView();
        var clothesCollection = new ClothesCollection(config.clothes);
        var clotheslist = new ClothesListView({ collection: clothesCollection });
        this.$el.append(weatherView.el);
        this.$el.append(clotheslist.el);
    }

});