// require files
import 'normalize-css';
import 'font-awesome-webpack';
import '../assets/styles/main.scss'
import $ from 'jquery';
import angular from "angular";
import Restangular from "restangular-umd";
import _ from "underscore";
import ngRoute from "angular-route";

var myApp = angular.module('myApp', ['restangular', 'ngRoute']);

// define directives
require("./directives")(myApp);

// define controllers
const controllers = require("./controllers")(myApp);

require("./services")(myApp);
require("./routes")(myApp, controllers);

// set global config on rootscope
require("./config")(myApp);

// set main controller
myApp.controller("MainCtrl", controllers.MainCtrl);

// require slim templates
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/templates', true, /\.slim$/));

