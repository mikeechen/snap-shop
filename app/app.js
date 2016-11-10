import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';
import CatalogCtrl from './controller/catalog.controller';
import CartCtrl from './controller/cart.controller';
import CatalogService from './services/catalog.service';
import CartService from './services/cart.service';
import ViewControl from './controller/view.controller';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('catalogService', CatalogService)
  .service('cartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .controller('ViewControl', ViewControl)
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
        templateUrl: 'views/catalog.html'
      })
      .state('catalog.order', {
        url:'/catalog/order',
        templateUrl: 'views/catalog/order.html'
      })
      .state('signUp', {
        url: '/signup',
        templateUrl: 'views/signup.html'
      });
  }]);
