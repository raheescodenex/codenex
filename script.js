// Kitchen Project ==================================================
let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

let kitchenInputData;
let kitchenInputDataArray = [];

let setLocalStorage = (kitchenInputDataArray) => {
  localStorage.setItem("kitchenInput", JSON.stringify(kitchenInputDataArray));
};

let getLocalStorage = () => {
  if (localStorage.getItem("kitchenInput")) {
    kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenInput"));
    buildUI();
    console.log("data found");
  } else {
    console.log("no Data");
  }
};

const buildUI = () => {
  kitchenItemsList.textContent = "";
  kitchenInputDataArray.forEach((item) => {
    //   Create Dom Element
    let li = document.createElement("li");
    let spanEl = document.createElement("span");
    li.appendChild(spanEl);
    spanEl.innerText = item;
    li.style.cssText = "animation-name:slideIn";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();

    console.log(kitchenInputData);

    // Create Trash Button
    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);
    console.log(trashBtn);

    // Create Edit Button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit");
    li.appendChild(editBtn);
  });
};

const addKitchenItems = () => {
  let kitchenInputData = kitchenInput.value;

//   kitchenInputDataArray.push(kitchenInputData);
  kitchenInputDataArray=[...kitchenInputDataArray,kitchenInputData];

  console.log(kitchenInputDataArray);
  //Store vale to Local Storage
  setLocalStorage(kitchenInputDataArray);

  //Get value from Local-Storage
  getLocalStorage();
};

const deleteItems = (e) => {
  console.log(e);
  if (e.target.classList[1] === "fa-trash") {
    let parentEl = e.target.parentElement;
    parentEl.classList.add("slideOut");
    parentEl.addEventListener("transitionend", () => {
      parentEl.remove();
    });
  }
};

const editItem = (e) => {
  if (e.target.classList[1] === "fa-edit") {
    let editedValue = prompt("please Enter Item name");
    let parentEl = e.target.parentElement;
    let spanEl = parentEl.querySelector("span");

    spanEl.innerText = editedValue;
  }
};

addBtn.addEventListener("click", addKitchenItems);
kitchenItemsList.addEventListener("click", deleteItems);
kitchenItemsList.addEventListener("click", editItem);
getLocalStorage();
