angular.module('myApp',[]).directive("name",function(){
	return {
		restrict:"EC",
		replace:true,
		template:'<h1>lisa</h1>'
	}
});
	