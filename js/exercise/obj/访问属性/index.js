let person1 = {
  _name: 'Nicholas',
  get name() {
    console.log("Reading name");
    return this._name;
  },
  set name(value) {
    console.log()
  }
}