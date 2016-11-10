class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
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

CartCtrl.$inject = ['cartService'];
export default CartCtrl;
