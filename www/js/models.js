var ClothesModel = Backbone.Model.extend({
    attributes: [
        'title'
    ]
});

var ClothesCollection = Backbone.Collection.extend({
    model: ClothesModel
});