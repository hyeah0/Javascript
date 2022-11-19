function sayHello(nameOfPerson, age){
    console.log('hi my name is ' , nameOfPerson , 'i am ' , age );
}

sayHello("Kim", 15);
sayHello("Lee", 30);

// =================================================

function plus(a,b){
    console.log(a , "+" , b , "=", a+b);
}

plus(2,30);

function divide(a,b){
    console.log(a , "/" , b , "=", a/b);
}

divide(60,20);

// =================================================

const player = {
    name: "Kim",
    sayHello: function(otherPersonsName){
        console.log("hello", otherPersonsName);
    }
};
console.log(player);
console.log(player.name);
player.sayHello("Hue");


// ========return1=========================================

const age = 96;

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2 ; 
}

const krAge = calculateKrAge(age);
console.log(krAge);

// ========return2=========================================

const caculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    div: function(a,b){
        return a/b;
    },
 };

 const addNum = caculator.add(2,40);
 console.log(caculator);
 console.log(addNum);