const dDay = document.querySelector(".d-day");

function timeUntil(){
    const date = new Date();
    const christmas = new Date("2022-12-25 00:00:00");
    const gap = christmas - date;
    const restDate = Math.floor(gap/(1000*60*60*24)); 
    const restHour = Math.floor((gap/(1000*60*60))%24);
    const restMinutes = Math.floor((gap/(1000*60))%60);
    const restSeconds = Math.floor((gap/1000)%60);

    dDay.innerText=`${restDate}d ${restHour}h ${restMinutes}m ${restSeconds}s`;
}

timeUntil();
setInterval(timeUntil,1000);