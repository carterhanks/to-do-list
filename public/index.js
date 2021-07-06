// let addToDoButton = document.getElementById('addToDo');
// let toDoContainer = document.getElementById('toDoContainer');
// let inputField = document.getElementById('inputField');

// addToDoButton.addEventListener('click', function(){
//     let item = document.createElement('li');

//     item.classList.add('paragraph-styling');
//     item.innerText = inputField.value;
//     toDoContainer.appendChild(item);
//     inputField.value = "";

//     alert("Item Added!");

//     item.addEventListener('click', function(){
//         item.style.textDecoration = "line-through";
//         onClick(alert("Item Completed!"));
//     });

//     item.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(item);
//         onDblClick(alert("Item Removed!"));
//     });
// });


const message = document.querySelector("#message")

const addBtn = document.querySelector("form")

function addItem(evt) {
    evt.preventDefault();
    const inputField = document.querySelector("input");

    const item = document.createElement("li");

    const itemTitle = document.createElement("span");
    itemTitle.textContent = inputField.value;
    item.appendChild(itemTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = ("Delete");
    deleteBtn.addEventListener('click', deleteItem);
    document.querySelector("ul").appendChild(item);
    item.appendChild(deleteBtn);

    inputField.value = '';
};

addBtn.addEventListener("submit", addItem);

function deleteItem(evt) {
    evt.preventDefault();
    evt.target.parentNode.remove();
};

function crossOffItem(evt) {
    evt.preventDefault();
    evt.target.classList.toggle("checked");

    if(evt.target.classList.contains("checked") === true) {
        alert("Job well done! Item has been crossed off.");
    } else {
        alert("Item has been added back.");
    };
};