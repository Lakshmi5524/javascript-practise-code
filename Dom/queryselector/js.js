function changeClr() {
  var para = document.querySelector("p")
  para.style.color = "red"
}
function clss() {
  var para = document.querySelector("p.comp")
  para.style.background = "lightgreen"
}
function fun() {
  var para = document.querySelector("#intro")
  para.innerHTML =
    "I love Front end developer next month i will get my job defentely"
}

function divFun() {
  var para = document.querySelector("div > p")
  para.style.background = "lightblue"
}

function headerfun() {
  var para = document.querySelector("h5, h4")
  para.style.color = "blue"
}

function linkFun() {
  document.querySelector("a[target]").style.border = "10px solid blue"
}

function linFun() {
  var para = document.querySelector(".main")
  para.innerHTML = "React Js"
}
