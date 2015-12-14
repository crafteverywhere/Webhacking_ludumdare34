var app = angular.module('gt10', []);
app.controller('buttonCtrl', function($scope) {
    $scope.rightValue = 0;
    $scope.gt10Switch = true;
    $scope.isBoring = false;
    $scope.isSmart = false;
    $scope.incr = function() {
        $scope.rightValue += 1;
        if ($scope.rightValue > 10) {
            $scope.gt10Switch = false;
        }
        if ($scope.rightValue > 20) {
            $scope.isSmart = true;
        }
        if ($scope.rightValue > 99) {
            $scope.isBoring = true;
        }
    };
});