function displayNow(){
    let now = new Date();
    let currentTime = now.toLocaleTimeString();
    console.log(currentTime);
    document.querySelector('#current').innerHTML = currentTime;
}
setInterval(displayNow,1000); //1초마다 시간 계산함수 실행
// displayNow();
