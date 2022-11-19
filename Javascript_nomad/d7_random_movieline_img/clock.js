const today = document.querySelector("#today");
const clock = document.querySelector("#clock");

function currentDate(){
    const now = new Date();
    const month = String(now.getMonth()).padStart(2,"0");
    const date = String(now.getDate()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");

    today.innerHTML = `${now.getFullYear()} - ${month} - ${date}`;
    clock.innerHTML = `${now.getHours()} : ${minutes} : ${seconds}`;
}

currentDate();
setInterval(currentDate,1000);