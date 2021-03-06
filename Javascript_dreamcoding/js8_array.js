'use strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
// console.clear();

// 3. Looping over an array
// print all fruits
// a. for
console.log('==forλ¬Έμ ν΅ν΄ array νμΈ==');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
console.log('==for (value of iterable) μ ν΅ν΄ array νμΈ==');
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach(api callback ν¨μ)
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index);
})

fruits.forEach((fruit,index) => console.log(fruit,index));

// 4. Addtion, deletion, copy
// push: add an item to the end
console.log('==λ°μ΄ν° λ€μ μΆκ°==');
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
console.log('==λ°μ΄ν° λ€μμ λΆν° μ κ±°==');
const poped = fruits.pop(); // poped = λ°°μ΄μμ κ°μ₯ λ§μ§λ§ μμ
// fruits.pop();
console.log(fruits);
console.log(`λ°°μ΄μμ μ κ±°λ κ°μ₯ λ§μ§λ§ μμ : ${poped}`);

// unshift: add an item to the benigging
console.log('==μμμ λΆν° λ°°μ΄ μΆκ°==');
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the benigging
console.log('==μμμ λΆν° λ°°μ΄ μ κ±°==');
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.log('==λ°°μ΄μ μΆκ°==');
fruits.push('π', 'π', 'π');
console.log(fruits);
console.log('==splice(μλ±μ€ λͺλ² λΆν°, λͺκ° κΉμ§ μ§μΈμ§)==');
fruits.splice(1, 1);
console.log(fruits);
console.log('==splice(μλ±μ€ λͺλ² λΆν°, λͺκ° κΉμ§ μ§μ°κ³ , κ·Έ μ΄νμ μΆκ°μμ, μΆκ°μμ)==');
fruits.splice(1, 0, 'π', 'π');
console.log(fruits);

// combine two arrays
console.log('==concat : λ°°μ΄κ³Ό λ°°μ΄μ ν©μΉ¨)==');
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// console.clear();
console.log('==index of(d): dλ λͺλ²μ§Έ μΈλ±μ€μ μμΉν΄μλμ§)==');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯'));

// includes
console.log('==include(d): dκ° μΈλ±μ€μ μμΉν΄μλμ§ ( true, false )==');
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
// console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π₯₯'));