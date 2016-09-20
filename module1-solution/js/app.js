(function () {
  "use strict";

  var app = angular.module('LunchCheck', []);

  app.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.check = function () {
      var count = countItems($scope.lunch);

      if (!count) {
        $scope.message = "Please enter data first";
      } else {
        if (count <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      }
    };
  }

  function countItems(lunch) {
    if (lunch) {
      lunch = lunch.split(',').map(function (str) {
        return str.trim();
      }).filter(function (str) {
        return str;
      });
      return lunch.length;
    }
  }
})();