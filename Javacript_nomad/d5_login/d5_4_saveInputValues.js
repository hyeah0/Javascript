
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-form__name");
const loginButton = document.querySelector(".login-form__botton");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    paintGreetings(userName);
    // localStorage.getItem("username");
}

function paintGreetings(userName){
    greeting.innerText=`Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    //show the greeging
    paintGreetings(savedUserName);
    
}




