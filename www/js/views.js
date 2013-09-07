var ClothesListView = Backbone.View.extend({

    tagName: 'ul',

    events: {
        "click .icon":          "open",
        "click .button.edit":   "openEditDialog",
        "click .button.delete": "destroy"
    },

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

    events: {
        "click .icon":          "open",
        "click .button.edit":   "openEditDialog",
        "click .button.delete": "destroy"
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        var clotheslist = new ClothesListView({ collection: clothesCollection });
        this.$el.append(clotheslist.el);
    }

});