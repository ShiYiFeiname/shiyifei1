angular.module('angular1111App').controller('con2',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1602/list2",
		mothod:"GET"
	}).success(function(e){
		$scope.a=e
	})
})
