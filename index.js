let colors = ["Green", "yellow", "Red", "Orange"]
let button = document.getElementById("btn")
button.addEventListener("click", function () {
  var randomcolor = colors[Math.floor(Math.random() * colors.length)]
  let container = document.getElementById("contailner")
  container.style.background = randomcolor
})

// 1 Absolute value
//var n
//n = prompt("Enter the n Value ")
//if (n < 0) {
//  n = -n
//}
//alert(`Absolute value : ${n}`)

//============================================================
// 2 odd or even
//var n

//n = prompt("Enter the number")
//if (n % 2 == 0) {
//  alert(` ${n}  is Even Number`)
//} else if (n % 2 !== 0) {
//  alert(`  ${n}  is Odd Number`)
//}
//============================================================
//3 swap number
var a = 10
var b = 20

a = a + b //30 a=30
b = a - b //30-20=10
a = a - b //30-10=20

console.log(`After swap A:${a} and B:${b}`)

//============================================================
//4 natural numbers

//enter 5 1+2+3+4+5
//var n = 10
//var sum = 0
//for (var i = 1; i <= n; i++) {
//  sum = sum + i
//}
//console.log("sum of Number :" + sum)

//method 2

//var n, sum
//var n = prompt("Enter the N value")
//sum = (n * (n + 1)) / 2
//alert("sum is" + sum)

//============================================================
// 5 Factor of a Number 10 2   2)10

//var x, y
//x, (y = prompt(`${x}and ${y}`)) // number =quotient*divisor+Reminder
//if (x % y == 0) {
//  alert("Yes")
//} else {
//  alert("No")
//}

//5 sum of digits
//============================================================ doubts
//var num = 123
//var mod = 0
//var num = prompt("Sum of digits")
//while (num > 0) {
//  remi = num % 10
//  console.log("sum\n", remi)
//  num = num / 10
//}

//6 Reverse Number
//============================================================ doubts

function reversenumber(n) {
  n = n + ""
  return n.split("").reverse().join("")
}
console.log(Number(reversenumber(123456)))

//6 Reverse Number 2method
//============================================================
//var num
//var ans = 0
//num = prompt("Enter the numbers")
//while (num > 0) {
//  var mod = num % 10
//  ans = ans * 10 + mod
//  num = parseInt(num / 10)
//}
//console.log("Reverse of number : " + ans)

//7 Polindrom
//============================================================
//var num
//var ans = 0
//var temp = num
//num = prompt("Enter the numbers")
//while (num > 0) {
//  var mod = num % 10
//  num = parseInt(num / 10)
//  ans = ans * 10 + mod
//}
//if (ans == temp) {
//  alert("This is polindrom")
//} else {
//  alert("Not a polindrom")
//}

//Array method
//var number,
//  odd_count = 0,
//  event_count = 0
//number = prompt("Enter the array of size numbers")
//for (let i = 0; i < number.length; i++) {
//  if (number[i] % 2 == 0) {
//    event_count++
//    alert(`There are number of Count Even Number: ${event_count}`)
//  } else {
//    odd_count++
//    alert(`There are count of odd number: ${odd_count}`)
//  }
//}

//function get() {
//  var numb = document.getElementById("num").value
//  let even = 0
//  let odd = 0
//  for (var i = 0; i < numb.length; i++) {
//    if (numb[i] % 2 == 0) {
//      even++
//      Even.innerHTML = `even count of number is ${even}`
//    } else {
//      odd++
//      Odd.innerHTML = `Odd count of number is ${odd}`
//    }
//  }
//}

//sumof digits in array method
var arrsum = [1, 2, 4, 5, 6, 7]

var sumof = arrsum.reduce(function (accumlator, current) {
  return accumlator + current
}, 0)
console.log(`The sum of digis an array is: ${sumof}`)

//the largest value in array element
//function maximum() {
//  let array = [10, 2, 45, 30, 47, 80, 65]
//  let max = array[0]
//  console.log(max)
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] > max) {
//      max = array[i]
//    }
//  }
//  document.write(`The largest Elemet in the array is:${max}`)
//}
//maximum()

//function maximum() {
//  let array = [10, 2, 45, 30, 47, 80, 65]
//  let max = array[0]
//  let min = array[0]
//  console.log(max)
//  for (let i = 0; i < array.length; i++) {
//    if (array[i] > max) {
//      max = array[i]
//    }
//    document.write(`The largest Elemet in the array is:${max}`)
//     if else (array[1] < min) {
//      min = array[i]
//    }
//  }
//  document.write(`The largest Elemet in the array is:${min}`)
//}
//maximum()

//7 element exist or not  array
//============================================================

let item = ["milk", "bread", "sugar", "egg"]
function checkarra(items) {
  if (item.indexOf(items) == -1) {
    console.log("ellement not found" + items)
  } else {
    console.log("element found " + items)
  }
}

var str = "Lakshmi"
console.log(str)
console.log(str.length)
console.log(str.toString())
console.log(str.charAt(0))

var vow = "I love developer"
let count = 0
let vowels = ["a", "e", "i", "o", "u"]
//for (let i = 0; i < vowels.length; i++) {
//  console.log(vowels[i])
//}
//for (let ch of vow.toLowerCase()) {
//  if (vowels.includes(ch)) {
//    count++
//  }
//}
//document.write(`Vowels of count values:${count}`)

var string1 = "Hello World"
var string2 = "Hello"
if (string1 === string2) {
  console.log("Matching strings!")
} else {
  console.log("Strings do not match")
}
//Copy string
var copystr = "Lakshmi"
var smaecopy = []
for (let i = 0; i < copystr.length; i++) {
  smaecopy.push(copystr[i])
}
console.log(smaecopy.join(""))

//Concatenate two strings
var str1 = "Lakshmi"
var str2 = "Saravanan"
console.log(`${str1}${str2}`)

//Lower and upper problem
let loup = "i love developer"
console.log(loup[0].toLocaleLowerCase())

var sentence = "i want to become a good Mern stack developer as soon"
var words = sentence.split(" ")
console.log(words)

//Reverse String
var rever = "Lakshmi"
var spl = rever.split("")
//console.log(spl)
var re = spl.reverse()
console.log(re)
var joi = re.join("")
console.log(joi)

function reverstring(re) {
  var newstring = ""
  for (let i = re.length - 1; i >= 0; i--) {
    newstring += re[i]
  }
  return newstring
}

console.log(reverstring("Rajeshwari"))

var n = 5

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*")
  }
  document.write("<br>")
}
document.write("<br>")

var n = 6
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    document.write("*")
  }
  document.write("<br>")
}
document.write("<br>")
var n = 5
for (let i = n; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    document.write("*")
  }
  document.write("<br>")
}

//total number of leters appears
let maxchar = (strs) => {
  let obj = {}
  for (let char of strs) {
    //!obj[char] ? (obj[char] = 1) : obj[char]++
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }
  console.log(obj)
}
maxchar(
  "To create a downward triangle star pattern use a nested loop, it is also known as a reverse star pattern. From the above-shown pattern, you can see the number of"
)

//Reverse Number
var a = prompt("Enter a value")
var b,
  sum = 0
//var z = a
//console.log(z)
while (a > 0) {
  b = a % 10
  sum = sum * 10 + b
  a = parseInt(a / 10)
}
alert(sum)

let s1 = "abcdeedgcba"
let hashtable = {}
for (let i = 0; i < s1.length; i++) {
  console.log(s1[i])
  if (hashtable[s1[i]]) {
    hashtable[s1[i]] = 2
  } else {
    hashtable[s1[i]] = 1
  }
}
console.log(hashtable)

for (let key in hashtable) {
  if ((hashtable[key] = 1)) {
    console.log("Answer is : " + key)
  }
}
//Number polindrom

function Palindrome() {
  var rem,
    temp,
    final = 0
  var number = Number(document.getElementById("N").value)

  temp = number
  while (number > 0) {
    rem = number % 10
    number = parseInt(number / 10)
    final = final * 10 + rem
  }
  if (final == temp) {
    window.alert("The inputed number is Palindrome")
  } else {
    window.alert("The inputted number is not palindrome")
  }
}

var nums = 130
var temps = nums,
  sumsof = 0
while (nums > 0) {
  var mods = nums % 10
  sumsof = sumsof + mods * mods * mods // 3*3*3
  temps = parseInt(temps / 10)
}
if (sumsof == temps) {
  console.log("Amstrong Number")
} else {
  console.log("Not a Amstrong Number")
}
//fibonacce series

const fibonacciSeries = (num) => {
  let arr = []
  for (let i = 0; i <= num; i++) {
    if (i == 0 || i == 1) {
      arr[i] = i
      console.log(i)
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr
}
console.log(fibonacciSeries(6))


