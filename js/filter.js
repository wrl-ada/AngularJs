angular.module('myApp',[])
	.controller("filter",function($scope,$rootScope){
		$scope.money=1200000;
		$scope.date=new Date();
		$scope.users=[
		{id:1,name:"lisa",age:18},
		{id:2,name:"cat",age:23},
		{id:3,name:"tom",age:28}];
		$scope.func=function(user){
			return user.age>20;
		};
		//初始化化name值
		$scope.cond_name="";
	})
	.filter("myFilter",function(){
		return function(value,parm){
			return value+" "+parm;
		}
	});
	