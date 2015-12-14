var app = angular.module('morse', []);
app.controller('buttonCtrl', function($scope, $timeout) {
    $scope.isStartTimer = false;
    $scope.timer = 0;
    $scope.morseMail = "";
    $scope.morse = "";
    $scope.rightName = "Code";
    $scope.isWrong = false;
    $scope.startType = function() {
        $scope.isWrong = false;
        $scope.isStartTimer = true;
        $scope.typerTimer();
    };
    $scope.typerTimer = function() {
        if ($scope.timer > 10) {
            $scope.timer = 0;
            $scope.morseMail = "";
            $scope.morse = "Clearing...";
            return;
        }
        if ($scope.isStartTimer != true) {
            return;
        }
        $timeout(function() { $scope.timer += 1; $scope.typerTimer();}, 100);
    };
    $scope.endType = function() {
        if ($scope.morse === "Clearing...") {
            $scope.morse = "";
            return;
        }
        $scope.isStartTimer = false;
        var timer = $scope.timer;
        $scope.timer = 0;
        if (timer > 3) {
            $scope.typeMorseLong();
        } else {
            $scope.typeMorseShort();
        }
    };
    $scope.typeMorseShort = function() {
        $scope.morse += ".";
        $scope.rightName = "Code";
    };
    $scope.typeMorseLong = function() {
        $scope.morse += "-";
        $scope.rightName = "Code";
    };
    $scope.codeOrSend = function() {
        if ($scope.rightName === "Next") {
            window.location = "04_quizA.html";
        }
        if ($scope.rightName === "Real World") {
            window.location = "20_realWorld.html";
        }
        if ($scope.morse != "") {
            var morse_code = $scope.codeIt();
            if (morse_code != "") {
                $scope.morseMail += $scope.codeIt();
                $scope.morse = "";
                $scope.rightName = "Send";
            } else {
                $scope.morse = "";
                // Wrong code!
                $scope.isWrong = true;
            }
        } else {
            $scope.sendIt();
        }
    };
    $scope.codeIt = function() {
        switch($scope.morse){
            case ".-":
                return "a";
                break;
            case "-...":
                return "b";
                break;
            case "-.-.":
                return "c";
                break;
            case "-..":
                return "d";
                break;
            case ".":
                return "e";
                break;
            case "..-.":
                return "f";
                break;
            case "--.":
                return "g";
                break;
            case "....":
                return "h";
                break;
            case "..":
                return "i";
                break;
            case ".---":
                return "j";
                break;
            case "-.-":
                return "k";
                break;
            case ".-..":
                return "l";
                break;
            case "--":
                return "m";
                break;
            case "-.":
                return "n";
                break;
            case "---":
                return "o";
                break;
            case ".--.":
                return "p";
                break;
            case "--.-":
                return "q";
                break;
            case ".-.":
                return "r";
                break;
            case "...":
                return "s";
                break;
            case "-":
                return "t";
                break;
            case "..-":
                return "u";
                break;
            case "...-":
                return "v";
                break;
            case ".--":
                return "w";
                break;
            case "-..-":
                return "x";
                break;
            case "-.--":
                return "y";
                break;
            case "--..":
                return "z";
                break;
            //numbers part
            case ".----":
                return "1";
                break;
            case "..---":
                return "2";
                break;
            case "...--":
                return "3";
                break;
            case "....-":
                return "4";
                break;
            case ".....":
                return "5";
                break;
            case "-....":
                return "6";
                break;
            case "--...":
                return "7";
                break;
            case "---..":
                return "8";
                break;
            case "----.":
                return "9";
                break;
            case "-----":
                return "0";
                break;
            default:
                return ""
        }
    };
    $scope.sendIt = function() {
        if ($scope.morseMail === "here") {
            $scope.rightName = "Next";
        }
        if ($scope.morseMail === "2015") {
            $scope.rightName = "Real World";
        }
    };
});