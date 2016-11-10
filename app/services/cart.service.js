class CartService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
  }

  addCart(obj) {
    this.cart.push(obj);
  }

  updateCart(obj) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].name === obj.name) {
        this.cart[i].qty += 1;
      }
    }
  }

  updatePrice(price) {
    this.subtotal += price;
    this.tax = this.subtotal / 10;
    this.total = this.subtotal + this.tax;
  }
}

export default CartService;
