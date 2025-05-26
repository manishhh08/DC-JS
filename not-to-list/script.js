// let addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", () => {
//   alert("CLICKED");
// });
const generateUniqueId = () => {
  let stringGenerator =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let stringLength = 6;
  let stringValue = "";

  for (let i = 0; i < stringLength; i++) {
    let randomIndex = Math.floor(Math.random() * stringGenerator.length);
    stringValue += stringGenerator[randomIndex];
  }

  return stringValue;
};

let taskList = [];

// let taskList = [

//   { id: generateUniqueId(), task: "Initial Task", hour: 100, type: "good" },
// ];

const addTask = () => {
  let taskElement = document.getElementById("task");
  let hourElement = document.getElementById("hour");
  let typeElement = document.getElementById("type");

  //   create the task object
  const taskObject = {
    id: generateUniqueId(),
    task: taskElement.value,
    hour: parseInt(hourElement.value),
    type: typeElement.value,
  };

  console.log(taskObject);

  //   push the new task to task list
  taskList.push(taskObject);

  console.log(taskList);

  //   displaying the updated task list in the ui
  displayTaskList();
};

const updateTotalHours = () => {
  let totalHour = taskList.reduce((acc, item) => {
    return acc + parseInt(item.hour);
  }, 0);

  let totalHourElm = document.getElementById("totalHour");
  totalHourElm.innerText = totalHour;
  console.log("TOTAL:", totalHour);
};

const updateBadHours = () => {
  let badHour = taskList.reduce((acc, item) => {
    if (item.type == "bad") return acc + parseInt(item.hour);
    else return acc + 0;
  }, 0);

  let badHourElm = document.getElementById("badHour");
  badHourElm.innerText = badHour;
  console.log("TOTAL:", badHour);
};

const displayTaskList = () => {
  let goodCounter = 0;
  let badCounter = 0;
  let goodListElm = document.getElementById("goodList");

  let trList = "";
  //   loop through taskList
  for (item of taskList) {
    console.log("ITEM", item);
    if (item.type == "good") {
      goodCounter += 1;
      trList =
        trList +
        `<tr>
            <th scope="row">${goodCounter}</th>
            <td>${item.task}</td>
            <td>${item.hour}Hr</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="deleteTask('${item.id}')">
                    <i class="fa-solid fa-eraser"></i>
                </button> <button type="button" class="btn btn-success" onclick="swapTask('${item.id}')">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </td>
        </tr>`;
    }
  }

  goodListElm.innerHTML = trList;

  // for bad list
  let badListElm = document.getElementById("badList");
  let badtrList = "";
  //   loop through taskList
  for (item of taskList) {
    console.log("ITEM", item);
    if (item.type == "bad") {
      badCounter += 1;
      badtrList =
        badtrList +
        `<tr>
            <th scope="row">${badCounter}</th>
            <td>${item.task}</td>
            <td>${item.hour}Hr</td>
            <td>
                <button type="button" class="btn btn-warning" onclick="swapTask('${item.id}')">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>

                <button type="button" class="btn btn-danger" onclick="deleteTask('${item.id}')">
                    <i class="fa-solid fa-eraser"></i>
                </button> 

            </td>
        </tr>`;
    }
  }

  badListElm.innerHTML = badtrList;

  //   update total hours
  updateTotalHours();

  // update bad hours
  updateBadHours();
};

const deleteTask = (id) => {
  //alert(id);

  // update the task list without the task with the id
  taskList = taskList.filter((item) => item.id != id);

  // re render the tasklist
  displayTaskList();
};

//swap task list
const swapTask = (id) => {
  //alert(id);
  //update task list by swapping
  let task = taskList.find((item) => {
    return item.id == id;
  });

  if (task.type == "good") {
    task.type = "bad";
  } else {
    task.type = "good";
  }

  displayTaskList();
};
displayTaskList();
