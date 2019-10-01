app.controller('NavController', ['$scope', function($scope) {
	console.log("nav controller");
	$scope.menuvartrue = false;
	$scope.toggleMenu = function() {
		$scope.menuvartrue = !$scope.menuvartrue;
	};
}]);