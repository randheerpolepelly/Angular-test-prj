(function(){
	angular.module('eshopper', ['ui.router', 'ui.bootstrap', 'home'])
	
		.config(function($stateProvider, $urlRouterProvider){//routing logic
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: '/eshopper/app/home/home.html',
			controller : 'homeController'

			
		})

	});
}());