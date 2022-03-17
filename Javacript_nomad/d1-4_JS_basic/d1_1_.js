// alert("hi")

console.log(1234);

const a = 1;
const b = 2;

console.log('a+b=', a+b);

let c = 1;
let d = 2;
console.log('c+d=', c+d);
d = 4;
console.log('c+d=', c+d);

const amIFat = false;
console.log('am I Fat?', amIFat);

const money = null;
console.log(money);
let amIRich;
console.log(amIRich);

// =======array(배열)==============

const fruits = ['사과', '배', '포도', '복숭아', '키위'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.push('오렌지'));
console.log(fruits);

// =======objects==============

// const loginID = "";
// const passward = "";
// const email = "";

// console.log(loginID);

const loginData = {
     loginID : "kkk",
     passward : "aaa",
     email : "bbb@email.com",
     fat: true
}
console.log(loginData);
console.log(loginData.loginID);
loginData.fat = false;
console.log(loginData);