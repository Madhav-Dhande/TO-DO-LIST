let add = document.querySelector(".btn");
let input = document.querySelector("#inputuser");
let ul = document.querySelector(".list");

function inputLength() {
    return input.value.length;
}

function createList() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    let span = document.createElement("span");
    span.appendChild(document.createTextNode("x"));
    li.appendChild(span);

    saveData();
}

function afterClickAdd() {
    if (inputLength() > 0) {
        createList();
    }
}

function afterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createList();
    } 
}

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

add.addEventListener("click", afterClickAdd);
input.addEventListener("keypress", afterKeypress);

function saveData() {
    localStorage.setItem("todoList", ul.innerHTML);
}

function showTask() {
    if (localStorage.getItem("todoList")) {
        ul.innerHTML = localStorage.getItem("todoList");
    }
}

showTask();
