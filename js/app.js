var demoApp = angular.module('demoApp', ['ngRoute']);
demoApp.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				templateUrl: 'pages/main.html'
			})
		.when('/page2', {
			controller: 'SimpleController',
			templateUrl: 'pages/page2.html'
		}).
		otherwise({ redirectTo: '../pages/main.html'});
});