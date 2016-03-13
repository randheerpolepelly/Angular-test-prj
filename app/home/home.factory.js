(function(){
	function homeFactory(){
		var theme1 = {
			hello:function(){
				alert('hello green theme');
			}
		};
		var theme2 = {
			hello:function(){
				alert('yellow green theme');
			}
		};
		if(1){
			return theme1;	
		}
		else
		{
			return theme2;
		}	
	};
	angular.module('home')
	.factory('homeFactory', homeFactory);
}());