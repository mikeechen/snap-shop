class SignUpService {
  constructor($http, $state) {
    this.$http = $http;
    this.$state = $state;
    this.signIn = false;
    this.$http.get('/api/token')
      .then((res) => this.signIn = res.data)
      .catch((err) => Materialize.toast(err, 3000));
  }

  signUp(firstName, lastName, email, password) {
    return this.$http.post('/api/users', { firstName, lastName, email, password })
      .then((res) => {
        if (res.data) {
          Materialize.toast('Profile created!', 3000);
          return this.$http.post('/api/token', { email, password })
            .then((res) => {
              if (res.data) {
                Materialize.toast('Signed in!', 3000);
                this.$state.go('catalog');
                this.signIn = true;
              }
            });
        }
      })
      .catch((err) => Materialize.toast(err, 3000));
  }

  logIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then((res) => {
        if (res.data) {
          Materialize.toast('Signed in!!', 3000);
          this.$state.go('catalog');
          this.signIn = true;
        }
      })
      .catch((err) => Materialize.toast(err, 3000));
  }

  logOut() {
    return this.$http.delete('/api/token')
      .then((res) => {
        this.$state.go('home')
        this.signIn = false;
      })
      .catch((err) => Materialize.toast(err, 3000));
  }
}

SignUpService.$inject = ['$http', '$state'];
export default SignUpService;
