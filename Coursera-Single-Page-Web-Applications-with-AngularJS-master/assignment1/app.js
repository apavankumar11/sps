(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerCtrl', function ($scope) {
  $scope.message = "";
  $scope.dishes = "";
  $scope.checkIfTooMuch = function () {
      if($scope.dishes == "") {
          $scope.message = "Please enter data first";
      } else {
          var items = itemsInText($scope.dishes);
          if(items == 0 || $scope.dishes == "") {
              $scope.message = "Empty";
          } else if(items <= 3) {
              $scope.message = "Enjoy!";
          } else {
              $scope.message = "Too much!";
          }
      }

  };


  function itemsInText(string) {
    var arrayOfStrings = string.split(",");
    console.log(arrayOfStrings);
    return arrayOfStrings.length;
  }

});


})();
