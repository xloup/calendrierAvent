({
    baseUrl: ".",
    paths: {
        'backbone': '../bower_components/backbone/backbone',
        'lodash':'../bower_components/lodash/dist/lodash',
        'miso.ds':'../bower_components/miso.dataset/dist/miso.ds.min.0.4.1.m',
        'moment':'moment.min',
        'underscore.deferred' : '../bower_components/underscore.deferred/underscore.deferred',
        'underscore.math' : '../outsideBower/underscore.math/underscore.math',
        'underscore' :'../bower_components/underscore/underscore-min',
        'json2ie' : "../bower_components/json2/json2"

    },
    name: "main",
    out: "main-built.js",
    optimizeAllPluginResources: true,
    optimize: 'none',
})