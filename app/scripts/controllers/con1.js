angular.module('angular1111App').controller('con',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list1",
		mothod:"GET"
	}).success(function(e){
		$scope.a=e
	})
})
