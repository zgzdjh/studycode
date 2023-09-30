(function(){
  let test = {
    a: 1,
    f1() {

    }
  }
})()

{
  let test2 = {
    a: 1,
  }
  let test = {
    f1() {
      console.log(this)
    }
  }
  // call修改this的指向
  test.f1.call(test2)
}