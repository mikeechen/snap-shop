import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import CatalogCtrl from './controller/catalog.controller';

angular.module('my-app', [angularMaterialize])
  .controller('CatalogCtrl', CatalogCtrl);
