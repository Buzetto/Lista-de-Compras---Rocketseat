const taskInput = document.getElementById("input");
const addTaskButton = document.getElementById("button");
const form = document.querySelector("form");

const taskList = document.querySelector("ul");
const deleteTaskButton = document.getElementById("deleteButton");
const checkbox = document.getElementById("checkbox");

const removeAlert = document.getElementById("removeAlert");

taskInput.addEventListener("input", () => {});

form.onsubmit = (event) => {
  event.preventDefault();
  const newTask = taskInput.value;

  if (newTask === "") {
    alert("Please enter a task.");
  } else {
    addTask(newTask);
    taskInput.value = "";
  }
};

function addTask(task) {
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");

  const taskText = document.createElement("p");

  const deleteButton = document.createElement("button");

  deleteButton.addEventListener("click", () => removeTask(listItem));

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  document.querySelector(".listContainer ul").appendChild(listItem);
}

// Função para remover uma tarefa
function removeTask(listItem) {
  listItem.remove();
  showRemoveAlert();
}

// Função para exibir o alerta de remoção
function showRemoveAlert() {
  removeAlert.style.display = "flex";
  setTimeout(() => {
    removeAlert.style.display = "none";
  }, 2000);
}

document.querySelectorAll("#deleteButton").forEach((button) => {
  button.addEventListener("click", function () {
    removeTask(this.parentElement);
  });
});