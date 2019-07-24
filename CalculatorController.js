angular.module('myApp', []).controller("calculatorController",["$scope", function($scope)
{
    $scope.numberArray=[];
   $scope.modifiers = ['+','-','*','/'];
   $scope.firstValue = "";
   $scope.secondValue = "";
   $scope.currentModifier = "";
   var valueFlag = false;

   for(var i=9; i >= 0; i--) {
       $scope.numberArray.push(i);
   } 


function currentValueToShow(number)
{
    assignValues(number);
}

function assignValues(number)
{
    if(valueFlag)
    {
        $scope.secondValue+=number;
    }
    else
    {
        $scope.firstValue+=number;
    }
}
$scope.showNumber=currentValueToShow;
function activateFlag()
{
    valueFlag=true;
}

function setCurrentModifier(modifier)
{
    activateFlag();
    $scope.currentModifier=modifier;
}

$scope.makeSecondValue=setCurrentModifier;

function evalMath()
{
    if($scope.firstValue!=' ' && $scope.secondValue!=' ')
    {
        var mathFormat=$scope.firstValue+$scope.currentModifier+$scope.secondValue;
        $scope.result=eval(mathFormat);
    }



}

$scope.doMath=evalMath;

function clearScope() {
    valueFlag = false;
    $scope.firstValue = '';
    $scope.secondValue = '';
    $scope.currentModifier = '';
    $scope.result = '';
}

$scope.clearNumbers = clearScope;
}]);
