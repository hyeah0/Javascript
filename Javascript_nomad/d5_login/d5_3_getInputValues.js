
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-form__name");
const loginButton = document.querySelector(".login-form__botton");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME ="hidden"

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    greeting.innerText=`Hello ${userName}`;
    
}

loginForm.addEventListener("submit",onLoginSubmit);
