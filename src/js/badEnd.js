/**
 * Created by KUSO on 2015/12/14.
 */
angular.module("badEnd",[])
    .controller("bad_ctrl",function($scope) {
        $scope.restart = function() {
            window.location.href="../html/00_intr.html";
        }
        $scope.go_back = function() {
            window. history.go(-1);
        }
    });