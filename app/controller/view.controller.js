class ViewControl {
  constructor(location, signUpSvc) {
    this.location = location;
    this.signUpSvc = signUpSvc;
  }

  view() {
    let path = this.location.path();
    if (path === '/' || path === '') {
      return false;
    } else {
      return true;
    }
  }

  logOut() {
    this.signUpSvc.logOut();
  }
}

ViewControl.$inject = ['$location', 'signUpService'];
export default ViewControl;
