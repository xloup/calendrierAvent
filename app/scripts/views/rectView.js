/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
   // 'text!templates/rectTemplate.html',

    'settings'
], function ($, _, Backbone, data) {
    'use strict';

    var RectviewView = Backbone.View.extend({
       // template: JST['app/scripts/templates/rectView.ejs']
        className: "calBox",

        initialize :function() {


        },

        events: {
            "mouseenter .clickZone" :"overBox",
            "mouseout .clickZone" : "outBox",
            "click .clickZone"  : "clickBox"


        },

        render:function() {


            //stuck with Jquery V1,7, have to use .html() for template rendering via indirect placeHolder DaCubeEl
            var DaCubeEl=  jQuery('<div/>', {
                //  id: 'foo',
                //href: 'http://google.com',
                //title: 'Become a Googler',
                //rel: 'external',
                //text: 'Go to Google!'
            })
            //$(DaCubeEl).html(_.template(RectTemplate, this.model.toJSON() ));
           $(DaCubeEl).html(_.template(data.data.rectTemplate, this.model.toJSON() ));



            $(this.el).append(DaCubeEl);
            if (this.model.get("Actif")=="TRUE"){

                $(this.el).find(".imagesBGR").addClass("actif")
            }
        },

        overBox : function(e) {
           // event.stopPropagation();
           // console.log("overBox");
            if (this.model.get("Actif")=="TRUE")
            {
               $(this.el).find(".imagesBGR").addClass("over")
            }
        },
        outBox : function(e) {
            //console.log("outBox");
          //  event.stopPropagation();
            $(this.el).find(".imagesBGR").removeClass("over")

        },
        clickBox : function(e) {
            if (this.model.get("Actif")=="TRUE")
            {

                Backbone.history.navigate("calendrierAvent/videos/"+this.model.get("Day"), true);
            }
        }





    });

    return RectviewView;
});