/*global define*/

define([
    'jquery',
    'backbone',
    "underscore",
    'miso.ds',
    'settings',
    "helpers/getGoogleJson",
    "collections/rects",
    "views/rectsView"



], function ($, Backbone,_,Miso, data, GetJson, RectsCollection, RectsView) {
    'use strict';

    var someVar="unset";
    var rectsCollection;
    var rectsView;
    var routerRouter;
    var kalendarIsSet =false;

    var RouterRouter = Backbone.Router.extend({

        initialize:function() {


            //GET GOOGLE SPREADSHEET DATA INTO A BACKBONE COLLECTION
            rectsCollection = new RectsCollection();
            data.data.ds.each(function(row, rowIndex) {
                // do what you need here.
                //console.log(row);
                //console.log ("row"+row+" index="+rowIndex);
                rectsCollection.add(row);
            });
            rectsCollection.comparator="Order";
            rectsCollection.sort();
            this.rectsView = new RectsView ({collection:rectsCollection});
            //rectsView.render();

        },


        routes: {

            "calendrierAvent" :"defaultAction",
            "calendrierAvent/videos/:video" :"viewVideo",
            "*any" : "defaultActionForce"
        },

        defaultActionForce :function () {
            //console.log ("default force");
            var daVideoSettingsModel = rectsCollection.findWhere({"Day":1});

            if   (daVideoSettingsModel.get("ForceLaunch")=="yes"){
                //console.log("force")
                this.defaultAction();
            }
        },

        defaultAction :function () {
            //console.log("performing default actions");
            if (!kalendarIsSet) {

                this.rectsView.render();
                kalendarIsSet =true;
            }
            else {
                this.rectsView.hideVideo();

            }

        },

        viewVideo : function(video) {

            //console.log('viewVideo'+video);
            if (!kalendarIsSet) {
                this.defaultAction();
            }
            this.rectsView.showVideo(video);
        }


    });


    var initialize= function () {
        someVar="set";
        //console.log("router initializing");
        routerRouter = new RouterRouter;
        Backbone.history.start();

        }



    return {
            "RouterRouter":RouterRouter,
            "initialize":initialize,
            "routerInstance" :routerRouter
    };
});