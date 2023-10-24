function Person(name) {
  // 作用域安全保护
  if (this instanceof Person) {
    this.name = name;
  } else {
    return new Person(name);
  }
}