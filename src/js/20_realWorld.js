/**
 * Created by KUSO on 2015/12/14.
 */
angular.module("20_stage",[])
    .controller("20_ctrl",function($scope){
        $scope.tip = "";
        $scope.real_time = "night";
        $scope.act = function(){
            if ($scope.input_text.toLowerCase() == "morning"){
                $scope.real_time = "day";
            }
            if ($scope.input_text.toLowerCase() == "evening"){
                $scope.real_time = "night";
            }
            if ($scope.input_text == "271582"){
                $scope.tip = "Now you can go next.";
            }
        }
        $scope.go_next = function(){
            if ($scope.input_text == "271582"){
                window.location.href="../html/10_quizZ.html";
            }
        }
    })