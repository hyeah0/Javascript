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

//4 static properties and methods

class Article{
    static publisher = 'coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(`publisher : ${Article.publisher}`);
console.log(article1);
Article.printPublisher();
//클래스 자체에 객체가 지정


//반복되는 함수 extense

class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        console.log("세모");
    }
    getArea(){
        return(this.width * this.height)/2;
    }
}

const retangle = new Rectangle(20,20,'blue');
retangle.draw();
console.log(retangle.getArea());

const triangle = new Triangle(30,30,'pink');
triangle.draw();
console.log(triangle.getArea());