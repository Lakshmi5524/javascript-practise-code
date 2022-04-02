function changecplor() {
  var col = document.getElementById("div1")
  col.style.backgroundColor = "lightblue"
  col.style.padding = "10px"
}
function paras() {
  var pa = document.getElementById("para")
  pa.style.padding = "10px"
  pa.style.color = "red"
}

function display() {
  var empname = document.getElementById("name1").value
  var empid = document.getElementById("ID1").value
  var desi = document.getElementById("desi").value
  alert(`Employee: ${empname} EmployeeId: ${empid} Designtion: ${desi}`)
}
function check() {
  var fruitname = document.getElementsByName("fruit")
  if (fruitname[1].checked) {
    alert("orange is a citrus fruit")
  } else {
    alert("Mango is not a citrus fruit")
  }
}

//Tagname
function changes() {
  var Tag = document.getElementsByTagName("p")
  Tag.length
  console.log(Tag)

  Tag[1].style.backgroundColor = "yellow"
  Tag[2].style.fontStyle = "italic"
  Tag[3].style.color = "blue"
  Tag[4].style.textIndent = "40px"

  var len = Tag.length
  for (var i = 0; i <= len; i++) {
    Tag[i].style.fontSize = "20px"
  }
}
//InnerHTML
function show() {
  var inner = document.getElementById("para1")
  inner.innerHTML = "Welcome to javascript leran more and more "
}

function listitem() {
  var lists = document.getElementById("list")
  lists.innerHTML =
    "<li>Javascript</li><li>HTML</li> <li>Css</li><li>Reactjs</li>"
}
