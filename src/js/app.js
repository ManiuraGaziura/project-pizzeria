import {
  select,
  settings,
} from './settings.js';

import Product from './components/Product.js';
import Cart from './components/Cart.js';



  const app = {
    initData: function() {
      const thisApp = this;

      thisApp.data = {};

      const url = settings.db.url + '/' + settings.db.products;

      fetch(url)
      .then(function(rawResponse) {
        return rawResponse.json();
      })
      .then(function(parsedResponse) {
        console.log('parsedResponse:', parsedResponse);

        thisApp.data.products = parsedResponse;

        thisApp.initMenu();
      });

      console.log('thisApp.data:', JSON.stringify(thisApp.data));
    },
    
    initCart: function() {
      const thisApp = this;

      const cartElem = document.querySelector(select.containerOf.cart);
        thisApp.cart = new Cart(cartElem);
    },

    initMenu: function(){
      const thisApp = this;

      console.log('thisApp.data:', thisApp.data);

      const menuContainer = document.querySelector(
        select.containerOf.menu
      );

      menuContainer.addEventListener('add-to-cart', function(event) {
        thisApp.cart.add(event.detail.product);
      });

      for(let productData in thisApp.data.products){
        new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
      }
    },

    init: function(){
      const thisApp = this;

      console.log('*** App starting ***');
      console.log('thisApp:', thisApp);
      console.log('settings:', settings);

      thisApp.initData();
      thisApp.initCart();
    },
  };

  app.init();
