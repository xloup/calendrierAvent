/**
 * Created by leloup on 11/14/13.
 */
define([

    'miso.ds',
    'settings',
    'jquery',
    "backbone"

], function ( Miso, data, $, Backbone) {

    //load JSON via miso
   var toto ="hello";
    var ds ="helloDS";
    var eventObj ={};
    _.extend(eventObj, Backbone.Events);



    var getDS = function () {


        return ds;
    }


    var initialize= function() {
            //console.log("key is="+data.data.googleKey)


            ds =  new Miso.Dataset({
            importer : Miso.Dataset.Importers.GoogleSpreadsheet,
            parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
            key : data.data.googleKey,
            worksheet : "1"
             });

        ds.fetch({
            success : function() {
               // console.log(ds.columnNames());
               // console.log (ds);

                eventObj.trigger("googleJson", "ok")
            },
            error : function() {
                //console.log("Are you sure you are connected to the internet?");

                eventObj.trigger("googleJson", "error")

            }
        });

    }

    return {
        "initialize":initialize,
        "eventObj" :eventObj,
        "ds":ds,
        "getDS" :getDS
    }

});