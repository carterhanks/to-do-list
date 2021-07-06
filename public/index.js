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
//         alert("Item Completed!");
//     });

//     item.addEventListener('dblclick', function(){
//         toDoContainer.removeChild(item);
//         alert("Item Removed!");
//     });
// });


const addBtn = document.querySelector("form")

function addItem(evt) {
    evt.preventDefault();
    if(document.getElementById("inputField").value.length == 0) {
        alert("Uh oh! You cannot submit a blank task!");
    } else {
    const inputField = document.querySelector("input");

    const item = document.createElement("li");

    const itemTitle = document.createElement("span");
    itemTitle.textContent = inputField.value;
    itemTitle.addEventListener("click", crossOffItem);
    item.appendChild(itemTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = ("Delete");
    deleteBtn.addEventListener("click", deleteItem);
    document.querySelector("ul").appendChild(item);
    item.appendChild(deleteBtn);

        let w = window.open('', '', 'top=150,left=50,width=300,height=100')
        w.document.write("Doozie Added Successfully!");
        w.focus();
        setTimeout(function() {w.close();}, 1500);
    };

    inputField.value = '';
};

addBtn.addEventListener("submit", addItem);

function deleteItem(evt) {
    evt.preventDefault();
    evt.target.parentNode.remove();

    let w = window.open('', '', 'top=150,left=50,width=300,height=100')
    w.document.write("What a Doozie! Job deleted!");
    w.focus();
    setTimeout(function() {w.close();}, 1500);
};

function crossOffItem(evt) {
    evt.preventDefault();
    evt.target.classList.toggle("checked");

    if(evt.target.classList.contains("checked") === true) {
        let w = window.open('', '', 'top=150,left=50,width=300,height=100')
        w.document.write("Job well done! Doozie has been crossed off.");
        w.focus();
        setTimeout(function() {w.close();}, 1500);
        // alert("Job well done! Task has been crossed off.");
    } else {
        let w = window.open('', '', 'top=150,left=50,width=300,height=100')
        w.document.write("You aren't done with that Doozie! Job has been added back.");
        w.focus();
        setTimeout(function() {w.close();}, 2000);
        // alert("Task has been added back.");
    };
};