(function(){
	function helloAngular(){
		return{
			restrict : 'E',
			template : '<span>Hey, I am from angular</span>'
		}
	};


	angular.module('home')
	.directive('helloAngular', helloAngular);
}());