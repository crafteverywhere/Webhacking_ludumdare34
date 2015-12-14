var app = angular.module('home', []);
app.controller('buttonCtrl', function($scope) {
    $scope.where = "???";
    $scope.homeSwitch = false;
    $scope.isWrongWay = false;
    $scope.showDir = function() {
        $scope.homeSwitch = !$scope.homeSwitch;
        $scope.isWrongWay = false;
    };
    $scope.tryGo = function() {
        if ($scope.where === "???") {
            $scope.isWrongWay = true;
            return;
        }
        if ($scope.where.toLowerCase() === "bob") {
            window.location = "tips_bob.html";
        }
        if ($scope.where.toLowerCase() === "brother") {
            window.location = "03_morse.html";
        }
        if ($scope.where.toLowerCase() === "dog") {
            window.location = "tips_dog.html";
        }
        if ($scope.where.toLowerCase() === "cipher") {
            window.location = "tips_caesarCipher.html";
        }
        if ($scope.where.toLowerCase() === "home") {
            window.location = "00_intr.html";
        }
        if ($scope.where.toLowerCase() === "morse") {
            window.location = "tips_morse.html";
        }
        $scope.isWrongWay = true;
        return;
    };
});