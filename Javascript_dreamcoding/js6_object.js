'use strict';

// class : template
// object : instance of a class
// javascript classes 
// introduced in es6

//1. class 선언 방법

class Person {
    //constructor(생성자 : 오브젝트를 만들때 필요한것)
    constructor(name,age){
         //fields
        this.name = name;
        this.age = age;
    }
   
    //methods
    speak(){
        console.log(`${this.name} hi`);
    }

}

const kim = new Person('kim',20);
console.log(kim.name);
kim.speak();

//2. getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
//값을  return
    get age(){
        return this._age;
    }

//값을 설정
    set age(value){
      this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('kim','garden',-1);
console.log(user1);

//3. fields (public, private)
class Experiment{
    publicField = 2;
    #privateField = 3;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
