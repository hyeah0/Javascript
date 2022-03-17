// const age = prompt("how old are you?");
// console.log(typeof age);
// ===================================================
console.log(typeof "15", typeof parseInt("15") );
// ===================================================
// const age = parseInt( prompt("how old are you?"));
// console.log(typeof age);

console.log(isNaN(5));
console.log(isNaN("가나다"));

// ===================================================

const a = 6;
const b = "abc";

if(isNaN(a)){
    console.log( a, "는 숫자가 아닙니다.")
}
else{
    console.log( a, "은 숫자 입니다.")
}

if(isNaN(b)){
    console.log( b, "는 숫자가 아닙니다.")
}
else{
    console.log( b, "은 숫자 입니다.")
}