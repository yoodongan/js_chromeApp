toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoBox = document.querySelector(".todo-list-Box");
const toDoList = document.querySelector(".todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value="";
    const toDoObj = {
        text: toDo,
        id: Date.now()
    };
    paintToDo(toDoObj);
    toDos.push(toDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos();

}

function paintToDo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    clock.classList.remove(HIDDEN_KEY);
    toDoInput.classList.remove(HIDDEN_KEY);
    toDoBox.classList.remove(HIDDEN_KEY);
}
else{
    clock.classList.add(HIDDEN_KEY);
    toDoInput.classList.add(HIDDEN_KEY);
    toDoBox.classList.add(HIDDEN_KEY);
    
}


