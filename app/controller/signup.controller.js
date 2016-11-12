class SignUpControl {
  constructor(signUpSvc) {
    this.signUpSvc = signUpSvc;
    this.fName = '';
    this.lName = '';
    this.email = '';
    this.pwd = '';
  }

  signUp(firstName, lastName, email, password) {
    if (this.fName && this.lName && this.email && this.pwd) {
      this.signUpSvc.signUp(firstName, lastName, email, password);
    } else {
      Materialize.toast('Something went wrong. Please correct your mistakes!', 3000);
    }
  }

  logIn(email, password) {
    if (this.email && this.pwd) {
      this.signUpSvc.logIn(email, password);
    } else {
      Materialize.toast('Something went wrong. Please correct your mistakes!', 3000);
    }
  }

  logOut() {
    this.signUpSvs.logOut();
  }
}

SignUpControl.$inject = ['signUpService'];
export default SignUpControl;
