/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'models/rect'
], function ($,_, Backbone, RectsModel) {


    var RectsCollection = Backbone.Collection.extend({
        model: RectsModel,

        initialize:function() {
            //console.log("hello from collection")
        }
    });

    return RectsCollection;
});