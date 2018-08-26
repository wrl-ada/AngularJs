angular.module('myApp',[])
	.controller("list",function($scope,$rootScope){
		$scope.users=[
		{id:1,name:"lisa",age:28},
		{id:2,name:"cat",age:28},
		{id:3,name:"tom",age:28}];
		$scope.delete=function(index){
			console.info(index);
			$scope.users.splice(index);
		}
	});
	