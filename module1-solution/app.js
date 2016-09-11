(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=['$scope','$filter'];

function LunchCheckController($scope,$filter){
//Initiate values
$scope.message="Please enter data first";
$scope.item = "";
var styleInputGreen = {color:'green'};
var styleInputRed = {color:'red'};
var styleTextboxGreen = {borderColor:'green'};
var styleTextboxRed = {borderColor:'red'};

scope.styleInput=styleInputRed;
$scope.styleTextbox=styleTextboxRed;

  $scope.countItem=function(){
    var trim = $scope.item.trim();
    var removeSemi = trim.replace(',,',',');
      if(removeSemi==""){
        $scope.message="Please enter data first";
        $scope.styleInput=styleInputRed;
        $scope.styleTextbox=styleTextboxRed;
      }
      else if((removeSemi.match(/,/g) || []).length<3){
        $scope.message="Enjoy";
        $scope.styleInput=styleInputGreen;
        $scope.styleTextbox=styleTextboxGreen;
      }
      else {
        $scope.message="Too much!";
        $scope.styleInput=styleInputGreen;
        $scope.styleTextbox=styleTextboxGreen;
      }
    };
};

})();
