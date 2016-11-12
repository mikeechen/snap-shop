class CartService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
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
        this.cart[i].quantity += 1;
      }
    }
  }

  updatePrice(price) {
    this.subtotal += price;
    this.tax = this.subtotal / 10;
    this.total = this.subtotal + this.tax;
  }

  addOrder(items, address1, address2, city, state, zip) {
    return this.$http.post('/orders', { items, address1, address2, city, state, zip })
      .then((res) => {
        if (res.data) {
          Materialize.toast('Order added!', 3000);
          this.cart = [];
          this.subtotal = 0;
          this.tax = 0;
          this.total = 0;
        }
      })
      .catch((err) => Materialize.toast(err, 3000));
  }
}

CartService.$inject = ['$http', '$state'];
export default CartService;
