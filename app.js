
const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes") || "";

  notes = document.querySelectorAll(".input-box");
  notes.forEach((note) => {
    note.addEventListener("keyup", () => {
      upDateStorage();
    });
  });
}

showNotes();

function upDateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

// Create a note when we click the button
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./img/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);

  upDateStorage();

  inputBox.addEventListener("keyup", () => {
    upDateStorage();
  });
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    upDateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
