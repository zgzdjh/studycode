var property
var obj = {
  name: 'wang',
  age: 12
}
Object.prototype.add = function() {
  return 123
}

for (property in obj) {
  if (obj.hasOwnProperty(property)) { // 只查询自有属性，避免污染
    console.log("Name: " + property)
    console.log("Value: " + obj[property])
  }
}