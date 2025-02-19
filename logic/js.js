var input1 = document.getElementById("name");
var input2 = document.getElementById("name2");
var rr = " ";
var i = 1;
var booklist = [];
if (localStorage.getItem("books") == null) {
  booklist = [];
} else {
  booklist = JSON.parse(localStorage.getItem("books"));
  display();
}
//         add
function add() {
  if (
    input1.classList.contains("is-valid") &&
    input2.classList.contains("is-valid")

  ) {
    var list = {
      name: input1.value,
      link: input2.value,
    };
    
    localStorage.setItem("books", JSON.stringify(booklist));
    booklist.push(list);

    i += 1;

    display();
    clear();
  } else {
    alert("no vlaid data");
  }
}

//    display
function display() {
  var cc = "";
  for (var j = 0; j < booklist.length; j++) {
    cc += `
<hr/>
<div class="col-3">
  <div class="head">
    <p>${j + 1}</p>
  </div>
</div>
<div class="col-3">
  <div class="head">
    <p>${booklist[j].name}</p>
  </div>
</div>
<div class="col-3">
  <div class="head d-flex justify-content-center  ">
  <a href="${
    booklist[j].link
  }"class="text-decoration-none "> <div class="visit">
  <i class="fa-regular fa-eye"></i>
Visit
  </div></a> 
  </div>
</div>
<div class="col-3">
    <div class="head d-flex justify-content-center  ">
    <button class ="btn"onclick="deleted(${j})">
  <div class="dlt">
<i class="fa-solid fa-trash me-2"></i>Delete
  </div></button>
  </div>
</div>
`;
  }
  document.getElementById("rr").innerHTML = cc;
  input1.classList.remove("is-valid")
  input2.classList.remove("is-valid")
}

//   Delete
function deleted(deletednumb) {
  booklist.splice(deletednumb, 1);
  localStorage.setItem("books", JSON.stringify(booklist));
  display();
}

//    validate

function validate(element) {
  var regex = {
    name: /^[a-z]{3,}$/i,
    name2:
      /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i,
  };
  if (regex[element.id].test(element.value) == true) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    element.nextElementSibling.classList.remove("d-none");
  }
}

//   claear
function clear() {
  input1.value = null;
  input2.value = null;
}
