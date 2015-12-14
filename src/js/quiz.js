var app = angular.module('quiz', []);
app.controller('buttonCtrl', function($scope) {
    $scope.showDefault = true;
    $scope.showA = false;
    $scope.showB = false;
    $scope.showC = false;
    $scope.showD = false;
    $scope.yourMind = "default";
    $scope.changeMind = function() {
        switch($scope.yourMind){
            case "A":
                $scope.yourMind = "B";
                // show the answer.
                $scope.showDefault = false;
                $scope.showA = false;
                $scope.showB = true;
                $scope.showC = false;
                $scope.showD = false;
                break;
            case "B":
                $scope.yourMind = "C";
                // show the answer.
                $scope.showDefault = false;
                $scope.showA = false;
                $scope.showB = false;
                $scope.showC = true;
                $scope.showD = false;
                break;
            case "C":
                $scope.yourMind = "D";
                // show the answer.
                $scope.showDefault = false;
                $scope.showA = false;
                $scope.showB = false;
                $scope.showC = false;
                $scope.showD = true;
                break;
            default:
                $scope.yourMind = "A"
                // show the answer.
                $scope.showDefault = false;
                $scope.showA = true;
                $scope.showB = false;
                $scope.showC = false;
                $scope.showD = false;
                break;
        }
    };
    $scope.answer = function() {
        if ($scope.yourMind === $scope.rightAnswer) {
            switch($scope.Qnumber){
                case 1:
                    window.location = "05_quizB.html";
                    break;
                case 2:
                    window.location = "06_quizC.html";
                    break;
                case 3:
                    window.location = "07_quizD.html";
                    break;
                case 4:
                    window.location = "08_quizE.html";
                    break;
                case 5:
                    window.location = "30_orderByColor.html";
                    break;
                default:
                    window.location = "02_home.html";
                    break;
            }
        } else {
            window.location = "badEnd.html";
        }
    };
});