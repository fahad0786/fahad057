const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const ulist = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const RemoveTodo = document.getElementById("removebtn");


function newTodo() {
  var itemAdded = document.querySelectorAll('.ToDoitem');
  var crtLi = document.createElement('li');
  crtLi.className = 'ToDoitem';

  var divTodo = document.createElement('div');
  divTodo.className = "div-addTodo";

  ulist.parentNode.appendChild(divTodo);
  var x = document.createElement("Input");
  x.setAttribute("type", "text");

  divTodo.appendChild(x);
  var btn = document.createElement("button");
  btn.innerHTML = "Add Item";
  divTodo.appendChild(btn);
  btn.onclick = () => {
    console.log(x.value);
    crtLi.appendChild(document.createTextNode(x.value));
    divTodo.parentNode.removeChild(divTodo);
  }
  ulist.appendChild(crtLi);
  let arr = Array.from(itemAdded);
  itemCountSpan.innerHTML = arr.length + 1;
}

function removeTodo() {
  var deleteListItem = document.getElementsByClassName("Remove");
  for(var i = 0; i < deleteListItem.length; i++){
    deleteListItem[i].addEventListener('click', deleteListItem, false);
  }
  ulist.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";
}
