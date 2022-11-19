const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-form__name");
const loginButton = document.querySelector(".login-form__botton");

function loginBtnClick(event){
    event.preventDefault();
    // console.dir(loginInput);
    // console.log("click");
    const userName = loginInput.value;
    console.log(userName);   
}


loginButton.addEventListener("click",loginBtnClick);