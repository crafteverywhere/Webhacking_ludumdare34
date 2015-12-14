/**
 * Created by KUSO on 2015/12/13.
 */
angular.module("33_stage",[])
    .controller("33_ctrl",function($scope) {
        $scope.state_open = false;
        $scope.state_close = true;
        $scope.state_note = false;
        $scope.state_nameplate = false;
        $scope.input_text = "";
        $scope.tip = "";
        $scope.pass = false;
        $scope.act = function(){
            //读纸条
            if ($scope.input_text.toLowerCase() == "read") {
                $scope.state_note = true;
            } else if ($scope.input_text.toLowerCase() == "input") {
                $scope.state_note = false;
                $scope.state_nameplate = false;
                $scope.tip = "Please input password.";
            } else if ($scope.input_text == "3462") {
                $scope.state_open = true;
                $scope.state_close = false;
                $scope.tip = "The Strongbox has be opened.";
            } else if ($scope.input_text.toLowerCase() == "take" 
                && $scope.state_open == true) {
                $scope.state_nameplate = true;
                $scope.tip = "You take the tag plate. There is a keyword on it";
            } else if ($scope.input_text.toLowerCase() == "time") {
                $scope.pass = true;
                $scope.tip = "You can go to next room.";
            } else if ($scope.input_text.toLowerCase() == "put") {
                $scope.state_note = false;
                $scope.state_nameplate = false;
                $scope.tip = "You put it back.";
            } else {
                $scope.tip = "Nothing happened!";
            }
        }
        $scope.go_34 = function() {
            if ($scope.pass==true) {
                window.location.href="../html/10_quizZ.html";
            } else {
                $scope.tip = "You should solve the puzzle first!";
            }
        }
});