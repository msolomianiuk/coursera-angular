(function () {
  "use strict";
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    var toBuy = [
      {name: "Salad", quantity: 10},
      {name: "Eggs", quantity: 20},
      {name: "Tuna", quantity: 2},
      {name: "Bacon", quantity: 1},
      {name: "Peaches", quantity: 9}
    ];
    var bought = [];

    this.getToBuyItems = function () {
      return toBuy;
    };

    this.getBougthItems = function () {
      console.log();
      return bought;
    };

    this.moveToBougth = function (index) {
      bought.push(toBuy[index]);
      toBuy.splice(index, 1);
    };

  }

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(service) {

    this.items = service.getToBuyItems();

    this.moveToBougth = function (index) {
      service.moveToBougth(index);
    };

  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(service) {

    this.items = service.getBougthItems();

  }
})();