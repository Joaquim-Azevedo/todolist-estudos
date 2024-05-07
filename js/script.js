// Variáveis

const textInput = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const allTasks = document.querySelector(".list-tasks");
let itemsList = [];

// Funções

function checks() {
let textlength = textInput.value.length;
  // Check de espaço em branco

  if (textInput.value == "") {
    console.log("Espaço em branco.");
  } else {
    addTask();
  }
  

}

function addTask() {
  itemsList.push({
    task: textInput.value,
    done: false,
  });
  textInput.value = "";
  textInput.focus();
  showTasks();
}

function showTasks() {
  let newLi = "";
  itemsList.forEach((item, index) => {
    newLi =
      newLi +
      `    
        <li class="task ${item.done && "done"}">
        <img src="/img/greenCheck.png" alt="checado" onclick="doneItem(${index})" />
        <p>${item.task}</p>
        <img src="/img/redX.png" alt="apagar-tarefa" onclick="deleteItem(${index})"/>
        </li>
        `;
  });
  allTasks.innerHTML = newLi;

  // localStorage.setItem("list", JSON.stringify(itemsList));
}

function deleteItem(index) {
  itemsList.splice(index, 1);
  showTasks();
  console.log(`Posição ${index} apagada.`);
}

function doneItem(index) {
  let toggleDone = (itemsList[index].done = !itemsList[index].done);
  showTasks();
  if (toggleDone) {
    console.log(`Tarefa de posição ${index} concluída.`);
  } else {
    console.log(`Tarefa de posição ${index} ainda não concluída.`);
  }
}

// function reloadTasks() {
//   const storageTasks = localStorage.getItem("list");

//   if (storageTasks) {
//     itemsList = JSON.parse(storageTasks);
//   }

//   showTasks();
// }

// reloadTasks();

// Eventos

addButton.addEventListener("click", checks);
