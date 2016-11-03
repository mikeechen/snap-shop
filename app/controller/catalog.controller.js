class CatalogCtrl {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
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

  addToCart(name, price) {
    this.subtotal += price;
    this.tax = this.subtotal / 10;
    this.total = this.subtotal + this.tax;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].name === name) {
        return this.cart[i].qty += 1;
      }
    }
    this.cart.push({ name, price, qty: 1 });
  }
}

export default CatalogCtrl;
