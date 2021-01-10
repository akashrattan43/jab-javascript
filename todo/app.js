//define ui cars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //ADD TASK EVENT
  form.addEventListener("submit", addTask);
}

//add Task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //create li element

  const li = document.createElement("li");
  li.className = "collection-item";
  //create text node and append li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement("a");
  //add class
  link.className = "delete-item secondary-content";
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link);

  //append li to ul
  taskList.appendChild(li);

  taskInput.value = "";

  e.preventDefault();
}
