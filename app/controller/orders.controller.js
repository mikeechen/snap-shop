class OrdersControl {
  constructor(ordersSvc) {
    this.ordersSvc = ordersSvc;
    this.ordersSvc.getOrders()
      .then((results) => {
        this.orders = results;
      })
      .catch((err) => Materialize.toast(err, 3000));
    this.items;
  }

  getOrderId(id) {
    this.ordersSvc.getOrderId(id)
      .then((results) => {
        this.items = results;
      })
      .catch((err) => Materialize.toast(err, 3000));
  }
}

OrdersControl.$inject = ['ordersService'];
export default OrdersControl
