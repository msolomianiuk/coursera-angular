(function () {
  "use strict";

  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    
    this.getAllCategories = function() {
      var url = ApiBasePath + "/categories.json";
      return $http.get(url);
    };
    
    this.getItemsForCategory = function(categoryShortName) {
      var url = ApiBasePath + "/menu_items.json?category=" + categoryShortName;
      return $http.get(url);
    }
    
  }
})();