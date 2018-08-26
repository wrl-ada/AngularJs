//module 模块
			//第一个参数：模块名称  第二个参数：当前模块依赖列表 组合 有利于代码重用
			//一个模块包含view，controller
//			var app = angular.module('myApp', []);
//			app.controller('myCtrl', function($scope) {
//				$scope.uname = "John";
//			});
			//避免使用全局变量
			angular.module('myApp',[])
				.controller("myCtrl",function($scope,$rootScope){
					//$scope.uname="son";
					$rootScope.uname="parent";
				})
				.controller("myCtrl1",function($scope,$rootScope){
					
				})
				.controller("age",function($scope,$rootScope){
					$scope.age=12;
				});