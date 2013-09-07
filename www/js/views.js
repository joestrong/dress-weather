var WeatherView = Backbone.View.extend({

    tagName: 'div',

    initialize: function() {
        this.render();
    },

    getWeatherHtml: function(){
        return '<p>The weather</p>';
    },

    render: function() {
        this.$el.html(this.getWeatherHtml());
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