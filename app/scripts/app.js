/**
 * Created by leloup on 11/13/13.
 */
define ( [
          "jquery",
          "backbone",
          "underscore",
          "routes/router",
          "helpers/getGoogleJson",
          "settings"


          ], function ($, Backbone, _, Router,  GetJson, data) {


        //load cSS
        var loadCSS = function loadCss() {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.media = "all";
            link.href = data.data.pathGlobal+"styles/main.css";

            $( document ).ready(function() {
            document.getElementsByTagName("head")[0].appendChild(link);
            });
        }



        var preload = function () {
            loadCSS();
            GetJson.eventObj.on("googleJson", handleGoogleJson)
            GetJson.initialize();

        };

        var handleGoogleJson = function (e) {

            if (e=="ok"){

                //make data available in the settings singleton
                data.data.ds =GetJson.getDS();




                //start the router now
                initialize();
            }
            else {
                //console.log("error in downloading google JSON");
                //gracefull exit - no alertboxes or messages if google data is not available
            }
        }

        var initialize = function () {

            //the view renders itself in pre-existent divs it has to find
            // safety measure - wait untill document is ready to be able to find the corresponding divs
            $( document ).ready(function() {
              //  console.log ("DOCUMENTREADY");
                Router.initialize();

            });

        };

       return {

           "initialize":initialize,
           "preload":preload


       }

    }

);