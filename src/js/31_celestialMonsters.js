angular.module("31_stage",[]).controller("31_ctrl",function($scope){$scope.img_1=1;$scope.img_2=1;$scope.img_3=1;$scope.img_4=1;$scope.img_border_1="img_border";$scope.img_border_2="233";$scope.img_border_3="233";$scope.img_border_4="233";$scope.img_index=1;$scope.button_text="Change";$scope.change_select=function(){if($scope.img_border_1=="img_border"){$scope.img_border_1="233";$scope.img_border_2="img_border";$scope.img_index=2;}else if($scope.img_border_2=="img_border"){$scope.img_border_2="233";$scope.img_border_3="img_border";$scope.img_index=3;}else if($scope.img_border_3=="img_border"){$scope.img_border_3="233";$scope.img_border_4="img_border";$scope.img_index=4;}else{$scope.img_border_4="233";$scope.img_border_1="img_border";$scope.img_index=1;}}
$scope.change_img=function(){if($scope.img_index==1){if($scope.img_1<4){$scope.img_1+=1;}else{$scope.img_1=1;}}
if($scope.img_index==2){if($scope.img_2<4){$scope.img_2+=1;}else{$scope.img_2=1;}}
if($scope.img_index==3){if($scope.img_3<4){$scope.img_3+=1;}else{$scope.img_3=1;}}
if($scope.img_index==4){if($scope.img_4<4){$scope.img_4+=1;}else{$scope.img_4=1;}}
if($scope.button_text=="Next"){window.location.href="../html/32_doWhatYouNeed.html";}
if($scope.img_1==1&&$scope.img_2==2&&$scope.img_3==4&&$scope.img_4==3){$scope.button_text="Next";}}});