class ViewControl {
  constructor(location) {
    this.location = location;
  }

  view() {
    let path = this.location.path();
    if (path === '/' || path === '') {
      return false;
    } else {
      return true;
    }
  }
}

ViewControl.$inject = ['$location'];
export default ViewControl;
