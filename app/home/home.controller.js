(function(){
	

	angular.module('home').controller('homeController', function($scope, homeFactory){
		homeFactory.hello();	
		console.log(homeFactory);
		$scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
	});
}());