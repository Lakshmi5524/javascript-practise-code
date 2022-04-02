var a = [1, 2, 3, 4]
a.map((item, index) => {
  console.log(item, index)
})

var arr = []
for (var i = 0; i < a.length; i++) {
  arr.push(a[i] * 2)
}
console.log(arr)

//task
var mark = [60, 40, 20, 70, 90]
var marks = mark.filter(function (item) {
  if (item <= 30) return item
})
console.log(marks)
//add arra using map
var a = ["my name", "your name"]
var b = a.map((item) => {
  return item + " is"
})
console.log(b)

let movie = [
  { name: "Harry poter", category: "action" },
  { name: "matrix", category: "drama" },
  { name: "Titanic", category: "love" },
]
let result = movie.map((item) => {
  item.name = item.name + " movie "
  return item
})
console.log(result)

let studen = [
  { name: "lakshmi", age: 24, dep: "EEE" },
  { name: "arun", age: 22, dep: "BE" },
  { name: "Keerthana", age: 25, dep: "BCA" },
  { name: "sumi", age: 22, dep: "MCA" },
]

//let update = studen.filter((studens) => {
//  studens.age >= 22
//})
//console.log(update)

let update = studen.map((items) => {
  if (items.age === 22) return items
})
console.log(update)

const companies = [
  { name: "company one ", category: "Finance", start: 1981, end2: 2003 },
  { name: "company two ", category: "Reatail", start: 1992, end2: 2008 },
  { name: "company three ", category: "Aoto", start: 1999, end2: 2007 },
  { name: "company four ", category: "Retails", start: 1989, end2: 2010 },
  { name: "company five ", category: "Tecnology", start: 2009, end2: 2014 },
  { name: "company six ", category: "Finance", start: 1987, end2: 2010 },
  { name: "company seven ", category: "auto", start: 1986, end2: 1996 },
  { name: "company eight ", category: "tecnology", start: 2011, end2: 2016 },
  { name: "company nine", category: "Retails", start: 1981, end2: 1989 },
]
const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//for (var i = 0; i < companies.length; i++) {
//  console.log(companies[i])
//}
//forEach
companies.filter(function (item) {
  console.log(item.name)
})

let ages = []
for (var i = 0; i < age.length; i++) {
  if (age[i] >= 21) {
    ages.push(age[i])
  }
}
console.log(ages)
//filter
//map
//reduce
//Fizzbuz
function fizbuz(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz:", +i)
    } else if (i % 3 === 0) {
      console.log("Fizz", +i)
    } else if (i % 5 === 0) {
      console.log("Buzz", +i)
    }
  }
}
fizbuz(15)

//printEvryNthcharater
function nthcharacter(str, n) {
  for (let i = n - 1; i <= str.length; i = i + n) {
    //console.log(i)
    console.log(str[i])
    //console.log("======================")
  }
}
nthcharacter("HelloHowAreYou", 3)

//check if the given arry is sorted are not
//[1,4,6,8,10]
function checkarraysorted(num) {
  for (var i = 1; i < num.length; i++) {
    //console.log(num[i])
    if (num[i - 1] > num[i]) {
      console.log("Not sorted")
      return false
    }
  }
  console.log("Array Number is sorted")
  return true
}

checkarraysorted([1, 4, 6, 8, 10])

function findminandmax(arr) {
  let min = arr[0]
  let max = arr[0]
  for (var i = 1; i < arr.length; i++) {
    //console.log(arr[i])
    if (arr[i] < min) {
      min = arr[i]
    }
  }
}
findminandmax([1, 2, 5, 1, 8, 11, 7, 6])

//coerection
// implesit type convertion this is autometicaly type convertion
console.log(1 + "1")

//what is lexical scope

//===============================
//global scope
//functional scope

//onec declar the outerscope : value you can accese to inner side
// inner scoper : you canot accses out side

var globalval = 10

function fun() {
  var mynum = 20
  console.log(mynum) //innerscope function scope
  console.log(globalval) // global scope
}
fun()
console.log(mynum)

console.log("1" + 2 + 3 + 4 + 5)
console.log(1 + 2 + 3 + 4 + "5")
console.log(1 + 2 + "3" + 4 + "5")
console.log("100" - 5)

//=====================================

if (0) {
  document.write("Hai evryOne")
}
if (1) {
  document.write("Hai evryOne1")
}
if ("0") {
  alert("Hello")
}

//splice methode
var array = [20, 30, 50, 60, 90, 50]
/* console.log(array.length()) */
array.splice(1, 1)
console.log(array)

var array = [20, 30, 50, 60, 90, 50]
array.splice(1, 3, 100, 200)
console.log(array)

var array = [20, 30, 50, 60, 90, 50]
array.splice(1, 0, 100, 200)
console.log(array)
