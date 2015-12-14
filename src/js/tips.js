var app = angular.module('tips', []);
app.controller('buttonCtrl', function($scope) {
    $scope.tipsSwitch = false;
    $scope.showTips = function() {
        $scope.tipsSwitch = !$scope.tipsSwitch;
    };
});