angular.module('myApp',[]).value("name","lisa")
	.controller("di",function($scope,$rootScope,name){
		$scope.name=name;
	});
	