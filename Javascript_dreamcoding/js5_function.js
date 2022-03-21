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
}
printArray('포도','사과','키위','오렌지');