
 /* document.getElementById("addBotao").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("addTarefa");
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;


  const deleteImg = document.createElement("img");
  deleteImg.src = "logolixo.png"; // Substitua pelo caminho correto da sua imagem de "excluir"
  deleteImg.id = "excluirImg"; // Define um ID para a imagem para poder estilizá-la facilmente
  deleteImg.addEventListener("click", function() {
    removeTask(newTask);
  });

  newTask.appendChild(deleteImg);
  taskList.appendChild(newTask);

  taskInput.value = "";
}

function removeTask(taskItem) {
  taskItem.remove();
} */

function checkEnter(event) {
  if (event.key === "Enter") {
    addTask();
    event.preventDefault(); // Para evitar o envio de formulário (se houver) quando a tecla Enter for pressionada
  }
}

document.getElementById("addBotao").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("addTarefa");
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;

  const deleteImg = document.createElement("img");
  deleteImg.src = "logolixo.png"; // Substitua pelo caminho correto da sua imagem de "excluir"
  deleteImg.id = "excluirImg"; // Define um ID para a imagem para poder estilizá-la facilmente
  deleteImg.addEventListener("click", function() {
    removeTask(newTask);
  });

  newTask.appendChild(deleteImg);
  taskList.appendChild(newTask);

  taskInput.value = "";
}

function removeTask(taskItem) {
  taskItem.remove();
}

