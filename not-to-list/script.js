// let addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", () => {
//   alert("CLICKED");
// });

const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
const toastContentElm = document.getElementById("toast-msg");
const chimeAudioElm = document.getElementById("chime-audio");

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

let taskList = [
  { id: generateUniqueId(), task: "Initial Task", hour: 10, type: "good" },
  { id: generateUniqueId(), task: "Initial Task", hour: 10, type: "good" },
  { id: generateUniqueId(), task: "Initial Task", hour: 10, type: "bad" },
  { id: generateUniqueId(), task: "Initial Task", hour: 10, type: "bad" },
];

const businessRule = (taskObj) => {
  const MAX_WEEKLY_HOUR = 168;

  if (taskObj.task == "") {
    alert("TASK SHOULD NOT BE EMPTY");
    return false;
  }

  if (taskObj.hour <= 0) {
    alert("HOUR SHOULD BE POSITIVE");
    return false;
  }

  if (taskObj.type == "") {
    alert("TASK TYPE SHOULD NOT BE EMPTY!!!");
    return false;
  }

  let tHour = calculateTotalHour();

  if (tHour + taskObj.hour > MAX_WEEKLY_HOUR) {
    alert("WEEKLY MAXIMUM HOUR EXCEEDED");
    return false;
  }

  return true;
};

const addTask = () => {
  let taskElement = document.getElementById("task");
  let hourElement = document.getElementById("hour");
  let typeElement = document.getElementById("type");

  //   alert(taskElement.value);
  //   alert(hourElement.value);
  //   alert(typeElement.value);

  //   create the task object
  const taskObject = {
    id: generateUniqueId(),
    task: taskElement.value,
    hour: parseInt(hourElement.value),
    type: typeElement.value,
  };

  if (businessRule(taskObject)) {
    console.log(taskObject);

    //   push the new task to task list
    taskList.push(taskObject);

    console.log(taskList);

    //   displaying the updated task list in the ui
    displayTaskList();

    toastContentElm.innerText = "TASK ADDED";
    // show the toast
    toastBootstrap.show();

    // chime audio play
    chimeAudioElm.play();
  }
};

const calculateTotalHour = () => {
  let hour = taskList.reduce((acc, item) => {
    return acc + parseInt(item.hour);
  }, 0);

  return hour;
};

const updateTotalHours = () => {
  let totalHour = calculateTotalHour();

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
  let goodListElm = document.getElementById("goodList");
  let trList = "";
  let goodCounter = 0;
  let badCounter = 0;
  //   loop through taskList
  for (item of taskList) {
    if (item.type === "good") {
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
    if (item.type === "bad") {
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
  alert(id);

  // update the task list without the task with the id
  taskList = taskList.filter((item) => item.id != id);

  //   updat the toast message
  toastContentElm.innerText = "TASK DELETED";

  // show the toast
  toastBootstrap.show();

  // re render the tasklist
  displayTaskList();
};

const swapTask = (id) => {
  // get the task with the id
  let task = taskList.find((item) => item.id == id);

  // change the task type
  task.type = task.type == "good" ? "bad" : "good";

  // re render the tasklist
  displayTaskList();
};

displayTaskList();
