/*global require*/
'use strict';

require.config({
   
    waitSeconds: 200,
    //'packages': [
    //    { 'name': 'lodash', 'location': '../bower_components/lodash-amd/compat' },
    //    { 'name': 'underscore', 'location': '../bower_components/lodash-amd/underscore' }],
    shim: {
        "json2ie": {

           exports:"JSON"
        },

        "underscore.math": {
            deps:["lodash"],
            exports:"_"
        },

        "underscore.deferred" : {
            deps:["lodash"],
            exports:"_"
        },

        underscore: {
            exports:"_"
        },

        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },

        "miso.ds":{
            deps :[
            'lodash',
            'moment',
            'underscore.deferred',
            'underscore.math',
            'json2ie'
            ],
            exports:'Miso'

        }



		
    },
    paths: {
         backbone: '../bower_components/backbone/backbone-min',
         lodash:'../bower_components/lodash/dist/lodash',
        'miso.ds':'../bower_components/miso.dataset/dist/miso.ds.min.0.4.1.m',
         'moment':'../bower_components/moment/min/moment.min',
        'underscore.deferred' : '../bower_components/underscore.deferred/underscore.deferred',
        'underscore.math' : '../outsideBower/underscore.math/underscore.math',
         underscore:'../bower_components/underscore/underscore-min',
        json2ie : "../bower_components/json2/json2",

        text: "text"

    }
});






// Wait for preexistant Jquery dependency being loaded in browser
var daJInterval = setInterval (function () {jExists(); }, 50 );

var jExists = function () {

    if (window.jQuery) {

        //Jquery Is loaded
        clearInterval(daJInterval);
        //console.log("haveJ"+$.fn.jquery);

            //Define (fix) of Jquery dependency
            // fixing the problem where jquery is loaded BEFORE require.js it does not define
            define('jquery', [], function () {
                var jReferenceHolder ;
                if (window.jQuery) {  jReferenceHolder=jQuery; }
                return jReferenceHolder;
            });

        //START APP
        require(['app'], function (  App ) {
            App.preload();
        })

    }
    else {

        //console.log("noJquery present");
    }


}
