// let popWin = window.open("index6_timeNotice.html","pop","width=300, height=300")

document.querySelector('#btn').onclick=displayTime;

function displayTime(){
    let left = (screen.availWidth-400)/2;
    let top = (screen.availHeight-200)/2;
    let opt = "left=" + left + ",top=" + top + ",width=" + 400 + ",height=" + 200;

    window.open("index6_timeNotice.html","",opt);
}