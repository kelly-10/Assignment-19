function changeText() {
  document.getElementById("description").textContent = "The text has been updated!";
}

function changeStyle() {
  const title = document.getElementById("main-title");
  title.style.color = "green";
  title.style.fontSize = "2.5rem";
  title.style.fontWeight = "bold";
}

function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically.";
  newPara.id = "dynamic";
  document.body.appendChild(newPara);
}

function removeElement() {
  const para = document.getElementById("dynamic");
  if (para) {
    para.remove();
  }
}
