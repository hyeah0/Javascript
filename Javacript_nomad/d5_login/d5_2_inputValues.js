const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-form__name");
const loginButton = document.querySelector(".login-form__botton");

// 1
// function loginBtnClick(event){
//     event.preventDefault();
//     const userName = loginInput.value;
//     console.log(userName);
//     console.log(userName.length);   
// }

// loginButton.addEventListener("click",loginBtnClick);

// 2
function onLoginSubmit(event){
    event.preventDefault();
    console.log(event);                        
}

loginForm.addEventListener("submit",onLoginSubmit);

const link = document.querySelector("a");

function clickLink(event){
    event.preventDefault();
    console.log(event);

}

link.addEventListener("click",clickLink);