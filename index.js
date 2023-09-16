let list = document.getElementById("todo-list");
let addBtn = document.getElementById("add-item");
let showCompleted = document.getElementById("completed");
let modeChange = document.getElementById("mode-change");

//add new list item
addBtn.addEventListener("click", function () {
  let newItemValue = document.getElementById("input-v").value.trim();
  if (!newItemValue) {
    alert("enter a valid todo value");
    return;
  }
  let newListElement = document.createElement("li");
  newListElement.className = "blacklist";

  //add checkbox
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "c";
  newListElement.appendChild(checkBox);

  //add todo text
  let textNode = document.createTextNode(newItemValue);
  textNode.className = "tex";
  newListElement.appendChild(textNode);
  list.appendChild(newListElement);
  newListElement.id = "item" + (list.childElementCount + 1);

  //input empty box aafter adding
  document.getElementById("input-v").value = "";

  //add cross at end of all items
  let cross = document.createElement("ion-icon");
  cross.setAttribute("name", "trash");
  cross.className = "del";
  newListElement.appendChild(cross);

  //cross working
  cross.addEventListener("click", function () {
    removeElement(newListElement);
  });

  //checkbox working
  checkBox.addEventListener("click", function () {
    checkElement(newListElement);
  });
});

//function to delete a list item
function removeElement(el) {
  el.style.display = "none";
}

//function to check if list item checked if checked then strike off
function checkElement(el) {
  el.classList.toggle("checked");
}

//function to change mode
function changeMode() {
  document.getElementById("mode-change").classList.toggle("sun");
  document.getElementById("mode-change2").classList.toggle("moon");
  document.querySelector("body").classList.toggle("whitebg");
  console.log(document.querySelectorAll(".blacklist"));
  let m = document.querySelectorAll(".blacklist");
  console.log(m);
  for (let i = 0; i < 100; i++) {
    m[i].classList.toggle("whitelist");
  }
  document.getElementById("input-v").classList.toggle("whitelist");
  addBtn.classList.toggle("whitelist");
}
