const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDoArray = [];
const TODOARRAY_KEY = "toDoArray"


function handleInputSubmit(event){
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    const newToDoObject = {
        id: Date.now(),
        text : toDoInputValue,
    }
    toDoInput.value = "";
    toDoArray.push(newToDoObject);
    addTodo(newToDoObject);
    saveToDoArray();
}

function addTodo(toDoInputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    
    li.id = toDoInputValue.id;
    span.innerText = toDoInputValue.text;
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);   
    toDoList.appendChild(li);
    console.log(li);
    button.addEventListener("click",deleteToDo);
}

// object를 string 형식으로 변환
function saveToDoArray(){
    localStorage.setItem(TODOARRAY_KEY, JSON.stringify(toDoArray));
}

function deleteToDo(event){
    const deleteLi = event.target.parentElement;
    const deletedID = parseInt(deleteLi.id);
    deleteLi.remove();
    toDoArray = toDoArray.filter((toDo) => toDo.id !== deletedID);
    saveToDoArray();
    
    // console.log(event);
    // console.dir(event.target);
    // console.dir(event.target.parentElement);
    // console.dir(event.target.parentElement.innerText);
    // function delectArray(item){return event.id !== deletedID };
}



toDoForm.addEventListener("submit",handleInputSubmit);

// 이미 저장된 todo 리스트 부르기
const savedToDo = localStorage.getItem(TODOARRAY_KEY);
// console.log(`saved ${savedToDo}`);
if(savedToDo !== null){
    const parsedToDoArray = JSON.parse(savedToDo);
    // console.log(parsedToDoArray);
    toDoArray = parsedToDoArray;
    parsedToDoArray.forEach(addTodo);
    // 화살표 함수 ==  parsedToDoArray.forEach((item) => console.log(`hey ${item}`));
}


// object들을 배열로 변경(parse), array의 각 아이템에 대해 하나의 function 을 실행
// const savedToDo = JSON.parse(localStorage.getItem("TODOARRAY_KEY"));
// if(savedToDo !== null){
//     const parsedToDoArray = JSON.parse(savedToDo);
//     console.log(parsedToDoArray);
//     parsedToDoArray.forEach(sayHello);
//     화살표 함수 ==  parsedToDoArray.forEach((item) => console.log(`hey ${item}`));
//     화살표 함수를 사용할때는 하단 function sayhello를 따로 작성하지 않아도 된다.
// }

// function sayHello(item){
//     console.log(`hey ${item}`);
// }