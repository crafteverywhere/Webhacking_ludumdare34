/**
 * Created by KUSO on 2015/12/13.
 */
angular.module("32_stage",[])
    .controller("32_ctrl",function($scope){
        $scope.show_eff = false;
        $scope.input_text = "";
        $scope.tip = "";
        $scope.act = function () {
            if ($scope.input_text.toLowerCase() == "on") {
                $scope.show_eff = true;
            }
            if ($scope.input_text.toLowerCase() == "off") {
                $scope.show_eff = false;
            }
            if ($scope.input_text.toLowerCase() == "ecd1") {
                $scope.tip = "Haha, you find it! But it doesn't work here.";
            }
        }

        $scope.go_33 = function(){
            if ($scope.input_text == "280") {
                window.location.href="../html/33_openTheSave.html";
            } else {
                $scope.tip = "You should solve the puzzle first!";
            }
        }
});