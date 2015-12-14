var app = angular.module('quiz', []);
app.controller('buttonCtrl', function($scope) {
    $scope.answerText = "......";
    $scope.answer = "";
    $scope.showDefault = true;
    $scope.quizSwitch = false;
    $scope.talk = function() {
        $scope.showDefault = false;
        $scope.quizSwitch = true;
    }
    $scope.syncAnswer = function() {
        if ($scope.answer != "") {
            $scope.answerText = $scope.answer;
        } else {
            $scope.answerText = "......";
        }
    };
    $scope.checkAnswer = function() {
        if ($scope.answerText.toLowerCase() === "time") {
            window.location = "../html/happyEnd.html";
            return;
        }
        if ($scope.answerText.toLowerCase() === "ludumdare") {
            window.location = "../html/realEnd.html";
            return;
        }
        if ($scope.answerText.toLowerCase() != "") {
            window.location = "../html/badEnd.html";
            return;
        }
    }
});