function Person(name) {
  this.name = name;
}

Person.prototype = {
  sayName() {
    console.log(this.name);
  }
}

let person1 = new Person('wang');
person1.sayName()