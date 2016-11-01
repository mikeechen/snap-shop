# Controllers

Now that the catalog page has been built out, Merv wants to see a cart page.

## Assignment

1. Initialize the application with `ng-app` and load `app.js` to initialize the angular module.
1. Use built in directives to build out the catalog page. Some ideas may include:
  * Using `ng-repeat` for the camera list and cart items
  * Using `ng-show`, `ng-hide`, or `ng-if` for displaying whether an item is on sale.
  * Using Angular Materialize's directives to support the select box.
  * Using `ng-model` to store information in a variable.
1. Use built in filters to build out the catalog page. Some ideas may include:
  * Using `currency` on the cart.
  * Using `filter` to filter items based on search
  * Using `orderBy` to update the order of items


## Resources

It will be nice to play with actual data coming from Angular in the application. For now, you can add this controller to the `app.js` file.

```javascript
// app.js
// ...

angular.module('MODULE_NAME', [/* ... */])
  .controller('CatalogCtrl', class CatalogCtrl {
    constructor() {
      this.cameras = [{
        id: 1,
        name: 'Nikon D3100 DSLR',
        image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
        rating: 4,
        price: 369.99,
        onSale: true
      }, {
        id: 2,
        name: 'Canon EOS 70D',
        image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
        rating: 2,
        price: 1099.0,
        onSale: false
      }, {
        id: 3,
        name: 'Nikon D810A',
        image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
        rating: 3,
        price: 3796.95,
        onSale: true
      }];
    }
  });
```

In your HTML, add the following to the `<body>` tag.

```html
<body ng-controller="CatalogCtrl as catalogCtrl">
  ...
  <ul>
    <li ng-repeat="camera in catalogCtrl.cameras">{{ camera.name }}</li>
  </ul>

</body>  
```
