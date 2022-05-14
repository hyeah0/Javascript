//객체 만들기

let name = "kim"
let age = 17

//기존 방식
// 변수이름과 키값이 동일하지 않을 경우에도 사용한다
// let person = {name:name, age:age}
let person = {nameValue:name, ageValue:age}

//es6 
// 변수이름과 키값이 동일할경우
let personES6 = {name, age}

console.log("person:")
console.log(person)
console.log("personES6:")
console.log(personES6)

console.log("========================================================")

// =========================================================

let rainbow = {
    color : "7 color",
    when : "after rain"
}

// 변수이름과 키값이 동일하지 않을 경우
// let color = rainbow.color
// let when = rainbow.when
// let colorValue = rainbow.color
// let whenValue = rainbow.when
// = 
// 변수이름과 키값이 동일할 경우
let {color, when} = rainbow

console.log(color,when)
// console.log(rainbow.color,rainbow.when)
// console.log(colorValue,whenValue)

console.log("========================================================")

// =========================================================
//배열

let array = [1,2,3]

//기존방법
// let a = array[0]
// let b = array[1]
// let c = array[2]

// console.log(a,b,c)

//새로운 방법
// let [a,b,c] = array
// console.log(a,b,c)

// spread 연산자 (...)
let [a,...rest] = array
console.log(a) // 배열의 첫번째(index 0 번째)
console.log(rest) // 배열의 첫번째를 제외한 나머지 배열이 보여진다(꼭 rest 를 사용 하지 않아도 된다 주고 싶은 변수 이름 사용가능)

console.log("========================================================")

// =========================================================
let actor = {
    name2 : "Timothée Chalamet",
    age2 : "26",
    nationality : "USA"
}

let{age2,...restInfo} = actor
console.log(age2) // actor 객체에서 age2 
console.log(restInfo)
console.log(age2,restInfo)

//여러 배열을 합치고 싶을때
let c = [1,2]
let d = [3,4]
let e = [5,6]

// let result = c.concat(d,e)
// console.log(result)
// == 상단 방법과 같은 결과가 나옴
let result = [...c,...d,...e]
console.log(result)

console.log("========================================================")

// =========================================================
// 새로운 선언 방식

//일반함수
// function foo(){
//     console.log("hello");
// }

//화살표함수
let foo = () =>{
    console.log("hello")
}
console.log(foo())

// => 화살표는 function 대체
// () 매게변수
// return 생략 가능

function ex1(){
    return "haha"
}
console.log(ex1())

// //=
let ex2 = () => "haha"
console.log(ex2())

// =========================================================
// this  전역변수와 구역변수를 구분하기 위함(나를 불러주는 객체)

// case1 : 전역변수 값이 나온다.
// let favoriteColor = "green"
// let object = {
//     favoriteColor : "blue",
//     getInfo: function(){
//         console.log(favoriteColor)
//     } 
// }
// object.getInfo() 
// green

// case2 : this 를 사용하면 구역변수 값이 나온다. 화살표 함수는 this를 생성하지 못한다

let favoriteColor = "green"
let object = {
    favoriteColor : "blue",
    getInfo: function(){
        console.log(this.favoriteColor)
    } 
}
object.getInfo()
// blue

console.log("========================================================")