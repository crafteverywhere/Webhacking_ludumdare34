var app = angular.module('intr', []);
app.controller('buttonCtrl', function($scope) {
    $scope.intrSwitch = false;
    $scope.intr = function() {
        $scope.intrSwitch = !$scope.intrSwitch;
    };
});