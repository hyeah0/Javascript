
'use strict';
// // Objects
// // one of the JavaScript's data types.
// // a collection of related data and/or functionality.
// // Nearly all objects in JavaScript are instances of Object
// // object = { key : value };
// // 객체는 key 와 value 의 집합체이다

// 오브젝트 만드는 방법
console.log('==오브젝트 만드는법 2 가지==');
// 1.'object literal' syntax
 const obj1 = {key1:'value1', key2:'value2'}; 
 console.log(obj1);

// 2.'object constructor' syntax 클래스를 이용한 방법
 class Object{
   constructor(classObjectKey1,classObjectKey2){
     this.classObjectKey1 = classObjectKey1;
     this.classObjectKey2 = classObjectKey2;
   }
   classTest(){
     console.log(`${this.classObjectKey1} hello`)
   }
 }
 const obj2 = new Object('objectValue1','objectValue2'); 
 console.log(obj2);
 obj2.classTest();


 console.log('==function을 사용하여 object 호출==');
 function print(person) {
   console.log(person.name);
   console.log(person.age);
 }
 const ellie = { name: 'ellie', age: 4 };
 print(ellie);

// // with JavaScript magic (dynamically typed language)_동적
// // can add properties later_나중에 properties 추가 가능하다 추후 유지 보수가 어렵다
console.log('==object안에 key를 추가 할 수 있다==');
ellie.hasJob = true;
console.log(ellie.hasJob);

// // can delete properties later_나중에 properties 삭제도 가능하다
console.log('==object안에 key를 삭제 할 수 있다==');
delete ellie.hasJob;
console.log(ellie.hasJob);

// // 2. Computed properties 계샨된 properties
// // key should be always string
console.log('==Computed properties : 정확한 키를 모를때 사용==');
console.log(ellie.name);
console.log(ellie['name']); // 상단과 동일한 값이 나온다.(배열에서 데이터 받아옴)
ellie['hasJob'] = true; // ellie 안에 hasjob 추가
console.log(ellie.hasJob);

// 정확한 키를 모를때 Computed properties 사용 (일반 코딩시에는 ellie.name 을 사용)
console.log('==Computed properties : 정확한 키를 모를때 사용 예시==');
function printValue(obj, key) {
  console.log(obj.key)
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// // 3. Property value shorthand
console.log('==property 값을 빠르게 추가 하고 싶을때==');
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
const person5 = new Person('Kim',28);
console.log(person4);
console.log(person5);

// // 4. Constructor Function
function Person(name, age) {
  // this = {}; 생략
  this.name = name;
  this.age = age;
  // return this; 생략
}

// // 5. in operator: property existence check (key in obj)
console.log('==object 안에 key 값이 있는지 확인==');
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); 
console.log(ellie.random);// 해당하는 키가 없으면 undefined 으로 나온다

// // 6. for..in vs for..of
// for (key in obj)
//console.clear(); // 이전 것들이 지워진다.
console.log('==for (key in obj) : objdect 안에있는 key 반환==');
for (let key in ellie) {
  console.log(key);
}

// // for (value of iterable)
console.log('==for (value of iterable) : array의 값 반환==');
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}
//array 있는 것들이 순차적으로 할당됨

// // 7. Fun cloning

// 오브젝트 복사
console.log('==오브젝트 복사==');
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);
console.log (user2);
user2.name = 'coder';
console.log (user2);

// // old way
console.log('==오브젝트 복사 : user 3 ==');
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
user3.name = 'Lee'
console.log(user3);

//유저안에 있는 key 를 돌면서 할당한다.
//user3에 있는 키를 user 안에 있는 키를 할당한다.

// console.clear();

// // Object.assign(dest, [obj1, obj2, obj3...])
console.log('==========');
const user4 = Object.assign({}, user);
console.log(user4);

// // another example
console.log('====another example====');
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const fruit3 = { color: 'green', size: 'small' };
const mixed = {};
Object.assign(mixed, fruit1, fruit2, fruit3);
console.log(mixed.color); //green
console.log(mixed.size); // small
// // 동일한 key 가 있다면 뒤에 있는 거로 덮어 씌운다s
