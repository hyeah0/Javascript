function printhHello(message){
    console.log(message);
}
printhHello('hi');

// 2. parameters 매게변수 : 두 변수를 연결
// premitive parameters : passed by value 
// object parameters : pssed by reference 

const Kim = { name : 'Kim'};
function changeName(obj){
    obj.name = 'coder';
}
console.log('before function');
console.log(Kim);
changeName(Kim);
console.log('after function');
console.log(Kim);

// 3. default parameters (add in es6)
function showMessage(message,from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('hello')
// from 값이 정의 되어있지 않으면 undefined가 호출되고
// defalut 값을 정하고 싶을때는 parameter 옆에 값 작성하기

// 4. rest parameters (add in es6)
function printArray(...args){
    console.log(args);
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    console.log('--------');
    for(const arg of args){
        console.log(arg);
    }
    console.log('--------');
    args.forEach((arg) => console.log(arg));
    console.log('--------');
}
printArray('포도','사과','키위','오렌지');

// function expresstion
// a. function declaration can be called earlier than it is defiend (hoisted)
// b. function expression is created when the excution reaches it

const print = function () { //anonymous function
    console.log('anonymous function');
}
print();
const printAagin = print;
printAagin();


// callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes!');
};

//nameed function
//함수안에서 함수 자신을 부를때,
//피보나치수나, 반복되는 평균값을 구할때
const printNo = function printN(){
    console.log('no!');
    // printN();
}

randomQuiz('love you', printYes, printNo);
randomQuiz('i do not love you', printYes, printNo);

//return value
function sum(a,b){
    return a+b;
}
const result = sum(2,4);
console.log(`sum : ${result}`);

// arrow function
// =anonymous function
const dontUseArrow = function(){
    console.log('do not use arrow function!');
}
const useArrow = () => console.log('use arrow function!');
dontUseArrow();
useArrow();

const add1 = (e,f) => e + f;
const add2 = function(e,f){
    return e + f;
};
const add3 = (e,f) => {
    return e + f;
};

const addResult = add1(3,4);
console.log(addResult);

