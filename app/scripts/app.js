'use strict';

/**
 * @ngdoc overview
 * @name angular1111App
 * @description
 * # angular1111App
 *
 * Main module of the application.
 */
angular
  .module('angular1111App', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state("index",{
  		url:'/abc',
  		templateUrl:'views/abc1.html',
		controller:'con'
  	}).state("index2",{
  		url:'/def',
  		templateUrl:'views/abc2.html',
		controller:'con2'
  	})
  })
  
  
