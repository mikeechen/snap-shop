class CatalogService {
  constructor($http) {
    this.$http = $http;
  }

  cameras() {
    return this.$http.get('/api/cameras')
      .then((cameras) => cameras.data)
      .catch((err) => console.log(err));
  }
}

CatalogService.$inject = ['$http'];
export default CatalogService;
