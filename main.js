let theinput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

window.onload = () => {
  theinput.focus();
};

theAddButton.onclick = () => {
  if (theinput.value === "") {
    alert("Please enter a task");
  } else {
    let noTaskMsg = document.querySelector(".no-tasks");
    if (document.body.contains(document.querySelector(".no-tasks"))) {
      noTaskMsg.remove();
    }
    let mainSpan = document.createElement("span");
    mainSpan.className = "task-box";
    if (theinput.value === mainSpan.textContent) {
      alert("Please enter a different task");
    } else {
      mainSpan.textContent = theinput.value;
    }
    let deleteElement = document.createElement("span");
    deleteElement.className = "delete";
    console.log(mainSpan.textContent);
    console.log(theinput.value);
    deleteElement.textContent = "Delete";
    tasksContainer.appendChild(mainSpan);
    mainSpan.appendChild(deleteElement);
    theinput.value = "";
    theinput.focus();
    calcaluteTask();
  }
};

document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    calcaluteTask();
  }
  if (tasksContainer.childElementCount == 0) {
    noTasks();
  }
  if (e.target.classList.contains("task-box")) {
    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
    calcaluteTask();
  }
  calcaluteTask();
});

noTasks = () => {
  msg = document.createElement("span");
  msg.className = "no-tasks";
  msg.textContent = "No Tasks To Show";
  tasksContainer.appendChild(msg);
};

function calcaluteTask() {
  tasksCount.innerHTML = document.querySelectorAll(".task-box").length;
  tasksCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
  console.log(tasksCount.tasksCompleted);
}
