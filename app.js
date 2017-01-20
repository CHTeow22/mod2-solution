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
      buyList.showBuyMsg = ShoppingListCheckOffService.buyMsg();
      // buyList.showBoughtMsg = ShoppingListCheckOffService.boughtMsg();
    };

    console.log(ShoppingListCheckOffService.buyMsg());
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;
    boughtList.bought = ShoppingListCheckOffService.getBoughtItem();

    if(boughtList.bought.length == 0) {
      boughtList.showBoughtMsg = "true";

    }
    boughtList.showBoughtMsg = ShoppingListCheckOffService.boughtMsg();
    console.log(boughtList.bought.length);
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
        name: "Coffee",
        quantity: "10"
      },
      {
        name: "Sweet",
        quantity: "50"
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
      if(boughtItem.length == 0) {
        boughtMsg = true;
      } else {
        boughtMsg = false;
      }
      console.log("loop if");
      return boughtItem;
    }


    service.removeItem = function (itemIndex) {

      var boughtThing = toBuyItem[itemIndex];
      toBuyItem.splice(itemIndex, 1);
      boughtItem.push(boughtThing);

      console.log(toBuyItem.length);
      console.log(boughtItem.length);
      if(toBuyItem.length == 0) {
        buyMsg = true;
        // console.log("true");
        // service.buyMsg = true;

      } else {
        buyMsg = false;
        // service.buyMsg = false;

        // console.log("false");
      }

      if(boughtItem.length == 0) {
        // console.log("true");
        boughtMsg = true;

        service.boughtMsg = true;
      } else {
        boughtMsg = false;
        service.boughtMsg = false;
      }

      // service.boughtMsg = false;
      // return buyMsg, boughtMsg;
    }

    // service.boughtMsg = false;
    service.buyMsg = function () {
      return buyMsg;
      // if((toBuyItem.length == 0) || (msg == true)) {
      //   return true;
      // } else {
      //   return false;
      //   console.log("false buy");
      // }
    }
    //
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
