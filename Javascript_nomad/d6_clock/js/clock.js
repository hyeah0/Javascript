const clock = document.querySelector("#clock");

function getClock(){
    // console.log("hello");
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");


    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000);
// setInterval(function명, 초(1초 =1000));
// ㄴ 실행하고자 하는 function 을 설정한 초별로 무제한 실행
// setTimeout(sayHello,1000);
// setTimeout(function명, 초);
// ㄴ 실행하고자 하는 function 을 설정한 초 후에 1회 실행
// "1".padStart(2."0") /padEnd
// ㄴ 1 텍스트 뒤에 1을 포함한 두개글자가 있어야 하고 1글자 앞에 "0"이 있어야 한다
// = 01
