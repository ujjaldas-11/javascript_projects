const todoList = document.querySelector(".todo-list");
const inputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");

var editTodo = null;
// function to add task
const addTodo = () => {
  const inputText = inputBox.value.trim();

  if (inputText.length <= 0) {
    alert("You must Write something in your todo");
    return false;
  }

  if (addBtn.value === "Edit") {
    editLocalTodos(editTodo.target.previousElementSibling.innerHTML); // calling editlocaltodo
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    // creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerHTML = inputText;
    li.appendChild(p);

    // creating edit button

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.append(editBtn);

    // creating delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "remove";
    deleteBtn.classList.add("btn", "delBtn");
    li.append(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);
  }
};

// funtion to updatetodo (edit/delete)

const updateTodo = (e) => {
  // console.log(e.target);
  if (e.target.innerHTML === "remove") {
    // console.log(e.target.parentElement);
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
  }

  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

    /*save local todos */
const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);
};

    /*get klocal todos */
const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      // creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");

      p.innerHTML = todo;
      li.appendChild(p);

      // creating edit button

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.classList.add("btn", "editBtn");
      li.append(editBtn);

      // creating delete button

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "remove";
      deleteBtn.classList.add("btn", "delBtn");
      li.append(deleteBtn);

      todoList.appendChild(li);
    });
  }
};

    /* delete local todos */
const deleteLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);

  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));

  console.log(todoIndex);
};

    /* edit local todos */
const editLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    console.log(todoIndex);
    
    localStorage.setItem("todos", JSON.stringify(todos));
};

document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
