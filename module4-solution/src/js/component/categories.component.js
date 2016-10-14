(function () {
  "use strict";

  angular.module('MenuApp')
    .component('categories', {
      templateUrl:'src/template/categories.component.template.html',
      bindings:{
        categories: '<'
      }
    })
})();