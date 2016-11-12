class CatalogCtrl {
  constructor(catalogSvc, cartSvc) {
    this.catalogSvc = catalogSvc;
    this.cartSvc = cartSvc;
    catalogSvc.cameras()
      .then((results) => {
        this.cameras = results;
      })
      .catch((err) => console.log(err));
  }

  addToCart(name, price, cameraId) {
    this.cartSvc.updatePrice(Number.parseFloat(price));
    for (let i = 0; i < this.cartSvc.cart.length; i++) {
      if (this.cartSvc.cart[i].name === name) {
        return this.cartSvc.updateCart(this.cartSvc.cart[i]);
      }
    }
    this.cartSvc.addCart({ cameraId, name, price, quantity: 1 });
  }

  getCartStuff() {
    return this.cartSvc.cart;
  }

  getMoney() {
    return {
      subtotal: this.cartSvc.subtotal,
      tax: this.cartSvc.tax,
      total: this.cartSvc.total
    };
  }
}

CatalogCtrl.$inject = ['catalogService', 'cartService'];
export default CatalogCtrl;
