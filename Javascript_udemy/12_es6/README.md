# ES6

## 객체

### 객체 만드는 방법

#### 기존 방법

        let name = "kim"
        let age = 17
        let person = {name:name, age:age}
        console.log(person)

        == 값 : {name:'kim', age: 17}

    키값과 변수명을 작성한다

#### 새로운 방법

        let name = "kim"
        let age = 17
        let person = {name, age}
        console.log(person)

        == 값 : {name:'kim', age: 17}

    변수명만 작성한다
    단 키값과 변수명이 동일할 경우만 사용 가능하다

#### 키값과 변수이름이 동일하지 않을 경우에는 기존 방법을 사용한다

        let name = "kim"
        let age = 17
        let person = {nameValue:name, ageValue:age}
        console.log(person)

        == 값 : {nameValue:'kim', ageValue: 17}

### 객체를 부르는 방법

#### 기존 방법

        let rainbow = {
            color : "7 color",
            when : "after rain"
        }

        let color = rainbow.color
        let when = rainbow.when
        console.log(color,when)

        또는

        let rainbow = {
            color : "7 color",
            when : "after rain"
        }
        console.log(rainbow.color,rainbow.when)

        == 값 : 7 color after rain

#### 새로운 방법

        let rainbow = {
            color : "7 color",
            when : "after rain"
        }
        let {color, when} = rainbow
        console.log(color,when)

        == 값 : 7 color after rain

## spread 연산자 (...)

    ... : 나머지값

        let actor = {
            name2 : "Timothée Chalamet",
            age2 : "26",
            nationality : "USA"
        }

        let{age2,...restInfo} = actor
        console.log(age2) // == 값 : 26
        console.log(restInfo) // == 값 : {name2: 'Timothée Chalamet', nationality: 'USA'}
        console.log(age2,restInfo) == 값 : 26 {name2: 'Timothée Chalamet', nationality: 'USA'}
