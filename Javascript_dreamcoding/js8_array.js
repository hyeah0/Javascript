'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
console.log(arr2);

// 2. Index position
const fruits = ['🍎', '🍌'];
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
console.log('==for문을 통해 array 확인==');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
console.log('==for (value of iterable) 을 통해 array 확인==');
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach(api callback 함수)
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index);
})

fruits.forEach((fruit,index) => console.log(fruit,index));

// 4. Addtion, deletion, copy
// push: add an item to the end
console.log('==데이터 뒤에 추가==');
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
console.log('==데이터 뒤에서 부터 제거==');
const poped = fruits.pop(); // poped = 배열에서 가장 마지막 요소
// fruits.pop();
console.log(fruits);
console.log(`배열에서 제거된 가장 마지막 요소 : ${poped}`);

// unshift: add an item to the benigging
console.log('==앞에서 부터 배열 추가==');
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging
console.log('==앞에서 부터 배열 제거==');
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
console.log('==배열에 추가==');
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
console.log('==splice(안덱스 몇번 부터, 몇개 까지 지울지)==');
fruits.splice(1, 1);
console.log(fruits);
console.log('==splice(안덱스 몇번 부터, 몇개 까지 지우고, 그 이후에 추가요소, 추가요소)==');
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

// combine two arrays
console.log('==concat : 배열과 배열을 합침)==');
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// console.clear();
console.log('==index of(d): d는 몇번째 인덱스에 위치해있는지)==');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));

// includes
console.log('==include(d): d가 인덱스에 위치해있는지 ( true, false )==');
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
// console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));