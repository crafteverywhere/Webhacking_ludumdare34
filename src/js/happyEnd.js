/**
 * Created by KUSO on 2015/12/14.
 */
angular.module("happyEnd",[])
    .controller("happy_ctrl",function($scope){
        $scope.restart = function(){
            window.location.href="../html/00_intr.html";
        }
        $scope.go_back = function(){
            window.location.href="../html/10_quizZ.html";
        }
    });