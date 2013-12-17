/*global define*/

define([
    'underscore',
    'backbone',
    'settings'
], function (_, Backbone,data) {
    'use strict';

    var RectModel = Backbone.Model.extend({
        defaults: {
            imgPath:data.data.pathGlobal+"images/",
            Day:0,
            VideoId :0,
            Title :0,
            ArtistName:0,
            ArtistLastName:0,
            ArtistURL:0,
            VideoURL :"",
            URLName :"",
            Desc:0,
            Order:0,
            Actif :false
        },

        initialize : function() {

            var d = new Date();
            //var n = d.getDate();
            var month = d.getUTCMonth();
            var day = d.getUTCDate();
            var year = d.getUTCFullYear();


            // The original state of the button as in google docs
            var originalActif=this.get("Actif");


            //activate the corresponding buttons for every day in december 2013
            if ((this.get("Day")<=day) && (year==2013) && ((month==11)||(month==12)) )
           {

               if (originalActif!="FALSE") {
                   this.set("Actif", "TRUE");
               }

           }
            else {

                this.set("Actif", "FALSE");
            }

          }
    }

    );

    return RectModel;
});