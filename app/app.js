(function(){
	angular.module('eshopper', ['ui.router', 'home'])
	
		.config(function($stateProvider, $urlRouterProvider){//routing logic
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			templateUrl: '/eshopper/app/home/home.html'
			
		})

	});
}());