// 构造函数的私有变量
function Person(name) {
  var age = 21;

  this.name = name;

  this.getAge = function() {
    return age;
  };

  this.growAge = function() {
    age++;
  };
}

var person1 = new Person('wang')
var person2 = new Person('li')

// person1.age = 100;
// console.log(person1.getAge());

person1.growAge();
console.log(person1.getAge())
console.log(person2.getAge())