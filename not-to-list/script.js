// let addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", () => {
//   alert("CLICKED");
// });
let taskList = [];

const addTask = () => {
  let taskElement = document.getElementById("task");
  let hourElement = document.getElementById("hour");
  let typeElement = document.getElementById("type");

  //   create the task object
  const taskObject = {
    task: taskElement.value,
    hour: parseInt(hourElement.value),
    type: typeElement.value,
  };

  //console.log(taskObject);

  //   push the new task to task list
  taskList.push(taskObject);

  //console.log(taskList);

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
  let totalBadHour = taskList.reduce((acc, item) => {
    if (item.type === "bad") {
      return acc + parseInt(item.hour);
    } else {
      return acc + 0;
    }
  }, 0);
  let totalBadHourElm = document.getElementById("totalBadHour");

  console.log(totalBadHour);
  totalBadHourElm.innerText = totalBadHour;
};

const displayTaskList = () => {
  let goodListElm = document.getElementById("goodList");
  let trList = "";
  //   loop through taskList
  for (item of taskList) {
    console.log("ITEM", item);
    if (item.type === "good") {
      trList =
        trList +
        `<tr>
            <th scope="row">1</th>
            <td>${item.task}</td>
            <td>${item.hour}Hr</td>
            <td>
                <button type="button" class="btn btn-danger">
                    <i class="fa-solid fa-eraser"></i>
                </button> <button type="button" class="btn btn-success">
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
    //console.log("ITEM", item);
    if (item.type === "bad") {
      badtrList =
        badtrList +
        `<tr>
            <th scope="row">1</th>
            <td>${item.task}</td>
            <td>${item.hour}Hr</td>
            <td>
                <button type="button" class="btn btn-danger">
                    <i class="fa-solid fa-eraser"></i>
                </button> <button type="button" class="btn btn-success">
                    <i class="fa-solid fa-arrow-right"></i>
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

displayTaskList();
