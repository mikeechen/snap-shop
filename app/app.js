import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';
import CatalogCtrl from './controller/catalog.controller';
import CatalogService from './services/catalog.service';
import CartService from './services/cart.service';
import ViewControl from './controller/view.controller';
import OrderControl from './controller/order.controller';
import SignUpService from './services/signup.service';
import SignUpControl from './controller/signup.controller';
import OrdersService from './services/orders.service';
import OrdersControl from './controller/orders.controller';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('catalogService', CatalogService)
  .service('cartService', CartService)
  .service('signUpService', SignUpService)
  .service('ordersService', OrdersService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('ViewControl', ViewControl)
  .controller('SignUpControl', SignUpControl)
  .controller('OrderControl', OrderControl)
  .controller('OrdersControl', OrdersControl)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/home.html'
      })
      .state('main', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('catalog', {
        url: '/catalog',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl as catalogCtrl'
      })
      .state('catalog.order', {
        url:'/order',
        templateUrl: 'views/catalog/order.html',
        controller: 'OrderControl as orderCtrl'
      })
      .state('signUp', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignUpControl as signUpCtrla'
      })
      .state('logIn', {
        url: '/logIn',
        templateUrl: 'views/login.html',
        controller: 'SignUpControl as signUpCtrl'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: 'views/orders.html',
        controller: 'OrdersControl as ordersCtrl'
      });
  }]);
