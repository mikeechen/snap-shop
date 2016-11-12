class OrderControl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
  }

  addOrder(address1, address2, city, state, zip) {
    if (address1 && city && state && zip) {
      this.cartSvc.addOrder(this.cartSvc.cart, address1, address2, city, state, zip);
    } else {
      Materialize.toast('Some information is missing!', 3000);
    }
  }
}

OrderControl.$inject = ['cartService'];
export default OrderControl;
