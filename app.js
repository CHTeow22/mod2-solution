(function () {
  'use strict';

  var itemList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    buyList.itemList = ShoppingListCheckOffService.toBuyItem;

    buyList.bought = function (itemIndex) {
      // ShoppingListCheckOffService.getItem(itemIndex);
      ShoppingListCheckOffService.buyToBoughtItem(itemIndex);
    };
    // console.log(itemIndex);

    buyList.nothingToBuy = function() {
      if (ShoppingListCheckOffService.toBuyItem.length != 0) {

      } else {
        return "Everything is bought!";
      }
    }


  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.boughtList = ShoppingListCheckOffService.boughtItem;

    boughtList.nothingBought = function () {
      if(ShoppingListCheckOffService.boughtItem.length != 0) {
        // show the div in html using ng-if
      } else {
        return "Nothing bought yet.";
      }
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItem = itemList;
    var boughtItem = [];

    service.boughtItem = boughtItem;
    service.toBuyItem = itemList;

    service.buyToBoughtItem = function (itemIndex) {
      toBuyItem.splice(itemIndex, 1);
      // boughtItem.push();
    }

    service.getItem = function (itemIndex) {
      var boughtThing = toBuyItem[itemIndex];
      boughtItem.push(boughtThing);
    }
    console.log(service.boughtItem);
  }





})();
