class OrdersService {
  constructor($http) {
    this.$http = $http;
  }

  getOrders() {
    return this.$http.get('/api/orders')
      .then((res) => res.data)
      .catch((err) => Materialize.toast(err, 3000));
  }

  getOrderId(id) {
    let string = '/api/orders/' + id;
    return this.$http.get(string)
      .then((res) => res.data.items)
      .catch((err) => Materialize.toast(err, 3000));
  }
}

OrdersService.$inject = ['$http']
export default OrdersService;
