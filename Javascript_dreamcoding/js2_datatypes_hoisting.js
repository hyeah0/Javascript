// 1. use strict
// added in es5
'use strict'

// 2. variable(변수)
// 2-1 let (read/write)
//     added in es6
//     mutable
    let name = 'Kim'
    {
        const name2 = "Hue";
        console.log(name);
    }
        // console.log(name2);

// block scoap {}
// {} 블럭 안에 있는 변수는 블럭 밖에서는 출력이 안된다
// 블럭 밖에 있는 글로벌한 변수는 항상 메모리에 탑재 되어있어 최소로 사용하기

// 2-2 contants (read only)
        // immutable 
        // Security
        // thread safety
        // reduce human mistakes

// 3. variable types
// primitive - single item : Number, string, boolean, null, undefined, Symbol
// Object 객체 - box container
// function - first-class function

// String
const a = 'a';
const b = 'hello' + a ;
console.log(`${a} , ${b}`);
console.log(`value : ${a}, type : ${typeof a}`);

// Boolean
// false : 0 ,null, undefined, NaN, ''
// true : any other value

