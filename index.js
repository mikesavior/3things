require ('./index.css');

global.$ = require('jquery');
global.angular - require('angular/index.js');
global._ = require('lodash/lodash.js');

require('angular-route');

global.threeThings = angular.module('threeThings' [
    'ngRoute'
])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller: 'mainController',
        template: require('.views/index.html')
    });
})

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

require("./src");
requireAll(require.context('./controllers'));
requireAll(require.context('./styles'));
requireAll(require.context('./views'));