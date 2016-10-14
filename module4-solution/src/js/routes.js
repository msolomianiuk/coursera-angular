(function () {
  "use strict";

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/template/home.state.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/template/categories.state.template.html',
        controller: 'CategoriesController as cc',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories().then(function (response) {
              return response.data;
            });
          }]
        }
      })
      .state('items', {
        url:'/categories/{category}',
        templateUrl: 'src/template/items.state.template.html',
        controller: "ItemsController as ic",
        resolve: {
          items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            console.log($stateParams.category);
            return MenuDataService.getItemsForCategory($stateParams.category).then(function (response) {
              console.log(response.data);
              return response.data.menu_items;
            });
          }]
        }
      });

  }

})();