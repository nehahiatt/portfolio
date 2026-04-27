app.controller('NavController', ['$scope', function($scope) {
	$scope.menuvartrue = false;
	$scope.toggleMenu = function() {
		$scope.menuvartrue = !$scope.menuvartrue;
	};
}]);