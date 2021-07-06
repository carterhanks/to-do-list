
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    let item = document.createElement('li');

    item.classList.add('paragraph-styling');
    item.innerText = inputField.value;
    toDoContainer.appendChild(item);
    inputField.value = "";

    alert("Item Added!");

    item.addEventListener('click', function(){
        item.style.textDecoration = "line-through";
        alert("Item Completed!");
    });

    item.addEventListener('dblclick', function(){
        toDoContainer.removeChild(item);
        alert("Item Removed!");
    });
});

// document.querySelector("input").addEventListener("submit", addItem) 
// function addItem(evt) {
//     evt.preventDefault() {
//         let inputField = document.querySelector("input");

//         const item = document.createElement("li");

//         const itemName = document.createElement("span");
//             itemName.textContent = inputField.value;
//             item.appendChild(itemName);

//         const list = document.querySelector("ul");
//             list.appendChild(item);
//             inputField.value = ''
//     }
// }