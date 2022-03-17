let now =new Date("2022-01-16");
let firstDay = new Date("2022-01-01")
let toNow = now.getTime();     //오늘 지난 시간
let toFirst = firstDay.getTime(); // 첫날 시간
let passedTime = toNow - toFirst;
console.log(now);
console.log(toNow);


passedTime = Math.round(passedTime/(1000*60*60*24));

document.querySelector('#result').innerText = passedTime;

// 초로 나누고, 분으로, 시간으로, 하루로 나눈다
