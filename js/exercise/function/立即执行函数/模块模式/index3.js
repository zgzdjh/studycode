// 模块模式和构造函数一起使用
var Person = (function() {
  var age = 21;

  function InnerPerson(name) {
    this.name = name;
  }

  InnerPerson.prototype.getAge = function() {
    return age;
  }

  return InnerPerson;
}())