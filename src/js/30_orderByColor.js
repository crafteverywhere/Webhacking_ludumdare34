/**
 * Created by KUSO on 2015/12/12.
 */
angular.module("30_stage",[])
.controller("30_ctrl", function($scope) {
    $scope.input_text = "";
    $scope.task = "按钮1";
    $scope.stage_value = 0;
    $scope.clc = function(){
        if ($scope.input_text=="25437") {
            $scope.stage_value = 1;
        }
    }
    $scope.go_forward = function() {
        window.location.href="31_celestialMonsters.html";
    }
});