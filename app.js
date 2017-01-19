(function () {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;
    buyList.itemList = ShoppingListCheckOffService.getBuyList();

    buyList.removeItem = function (itemIndex) {

      ShoppingListCheckOffService.removeItem(itemIndex);
    };
    buyList.showBuyMsg = ShoppingListCheckOffService.buyMsg();

    console.log(buyList.showBuyMsg);
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.bought = ShoppingListCheckOffService.getBoughtItem();

    // if(boughtList.bought.length == 0) {
    //   boughtList.showBoughtMsg = "Nothing bought yet.";
    //
    // }
    boughtList.showBoughtMsg = ShoppingListCheckOffService.boughtMsg();
    console.log(boughtList.showBoughtMsg);
  }

  function ShoppingListCheckOffService() {
    var service = this;

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


    var toBuyItem = itemList;
    var boughtItem = [];
    var buyMsg = false;
    var boughtMsg = true;

    service.getBuyList = function () {
      return toBuyItem;
    }

    service.getBoughtItem = function () {
      return boughtItem;
    }


    service.removeItem = function (itemIndex) {

      var boughtThing = toBuyItem[itemIndex];
      toBuyItem.splice(itemIndex, 1);
      boughtItem.push(boughtThing);

      // var count = toBuyItem.length;
      // service.showBuyMsg(count);
      console.log(toBuyItem.length);
      console.log(boughtItem.length);
      if(toBuyItem.length == 0) {
        buyMsg = true;
        // console.log("true");
        // service.buyMsg = function() {
        //   return true;
        // }

        // console.log(service.showBuyMsg );
      } else {
        buyMsg = false;
        // service.buyMsg = function() {
        //   return false;
        // }

        // console.log("false");
      }

      if(boughtItem.length == 0) {
        // console.log("true");
        boughtMsg = true;
      } else {
        boughtMsg = false;
      }
    }

    service.buyMsg = function () {
      return buyMsg;
      // if((toBuyItem.length == 0) || (msg == true)) {
      //   return true;
      // } else {
      //   return false;
      //   console.log("false buy");
      // }
    }

    service.boughtMsg = function () {
      return boughtMsg;
      // if((boughtItem.length == 0) || (msg == true)) {
      //   return true;
      // } else {
      //   return false;
      // }
    }
  }





})();
