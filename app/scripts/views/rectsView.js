/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    //'text!templates/rectsTemplate.html',
    'views/rectView',
    'settings'


], function ($, _, Backbone,  RectView, data) {
    'use strict';

    var RectsviewView = Backbone.View.extend({
       // template: JST['app/scripts/templates/rectsView.ejs']
       id:"calAventContainerID",

        initialize:function() {},

        events: {
         // "mouseenter .calAventVideoHolder" : "callVideoOver",
          "click .calAventVideoHolder" : "callVideoHide",
          "mousemove" :"followCursor",
          "click .calX" : "closeTab"

        },
        videoOn:false,
        render:function () {

            //stuck with Jquery V1,7, have to use .html() for template rendering via indirect placeHolder DaCubeEl
            var DaCubeEl=  jQuery('<div/>', {

            })
           // $(DaCubeEl).html(_.template(RectsTemplate));
           //rendering template from dat - settings file in order to fix crossdomain problem loading of txt- templates
           $(DaCubeEl).html(data.data.rectsTemplate);

            $(this.el).append(DaCubeEl);
            //finding the div in the present site where the clendar should auto-insert itself
            var specificElement = $("#magazine-homepage").find(".panel-separator").first();

            $('<div class="panel-separator"></div>').insertAfter(specificElement);

            //console.log("INSERTING CALENDAR INTO DOCUMENT");
            $(this.el).insertAfter( specificElement );


            this.renderAll();
        },

        renderAll:function () {
            //console.log("rendering All models");
            this.collection.each(this.renderOne, this);

        },
        renderOne:function (kelModel) {
            //console.log("rendering model");
            var tempView = new RectView({model:kelModel});
            tempView.render();
            $(this.el).find("#calBoxesHolder").append($(tempView.el));
        },

        showVideo : function (kelVideo) {
            //console.log("view rendering video"+kelVideo);
            $(this.el).find(".calAventVideoHolder").css("visibility", "visible");

           //get the video reference
           var daVideoModel = this.collection.findWhere({"Day":Number(kelVideo)});

            //embed vine video
          $('<iframe class="vine-embed" id="calAventiFrame" src="'+daVideoModel.get("VideoURL")+'/embed/postcard"  frameborder="0"></iframe>').appendTo($(this.el).find("#embeddedVineVid"));
           // $(this.el).find("#embeddedVineVidAuthor").html(daVideoModel.get("ArtistName"));
            $(this.el).find("#embeddedVineVidAuthor").html("<a href='"+daVideoModel.get("ArtistURL")+"' target='_blank'>"+daVideoModel.get("ArtistName")+"</a>")
            this.videoOn =true;
        },

        callVideoOver:function (e) {
            //console.log("over videoHolder");
        },

        callVideoHide : function (e) {
            //console.log("click videoHolder");
            Backbone.history.navigate("calendrierAvent", true);
        },
        hideVideo :function( ){
            $(this.el).find("#calAventiFrame").remove();
              $(this.el).find(".calAventVideoHolder").css("visibility", "hidden");
            this.videoOn =false;
        },

        followCursor : function(e) {

            if ( this.videoOn) {return;}
            var daOffset =  $(this.el).find(".calAventContainer").offset();
           // console.log(daOffset);
           // console.log("mouse moved"+" screen="+ e.screenX +" clientX="+ e.clientX);
            $(this.el).find("#handCursor").unbind();
            $(this.el).find("#handCursor").css("left", (e.clientX-daOffset.left-10)+"px");
            var scrollTopp =$(document).scrollTop();
            $(this.el).find("#handCursor").css("top", (e.clientY-daOffset.top+scrollTopp+99)+"px");
        },

        closeTab : function (e) {
            $("#calAventContainerID").remove();
        }

    });

    return RectsviewView;
});