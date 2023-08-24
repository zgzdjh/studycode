let length = 4;
function callback() {
  console.log(this.length);
}

const obj = {
  length: 5,
  method(callback) {
    callback();
  }
}

obj.method(callback, 1, 2);