//console.log("i")
//console.log("eat")
//setTimeout(() => {
//  console.log("ice cream time")
//}, 4000)
//console.log("with a")
//console.log("spoon")

//when you nest a function inside another function as an argument,that's called a callback function
// call back


//function one(call_two) {
//  console.log("step one.... please call step two")
//  call_two()
//}
//function two() {
//  console.log("step two-------")
//}
//one(two)

let stokes = {
  Fruits: ["srawberry", "grapes", "banana", "apple"],
  licquid: ["water", "ice"],
  holder: ["cone", "cube", "stick"],
  toppings: ["choculate", "peanuts"],
}
let order = (Fruits_name, call_production) => {
  setTimeout(() => {
    console.log(`${stokes.Fruits[Fruits_name]}`)
  }, 2000)
  call_production()
}
let production = () => {}
order(0, production)

//console.log(stokes.Fruits[1])
//for (let i = 0; i < stokes.licquid.length; i++) {
//  console.log(i)
//}
//console.log(stokes.holder)

//function oder(produc) {
//  onsole.log("oder please,please call production")
//  produc()
//}
//function production() {
//  console.log("order recived, starting")
//}
//oder(production)


