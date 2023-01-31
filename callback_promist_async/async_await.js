
// 만약 fetchUser 함수가 10초 정도 걸릴 경우 
// fetchUser 함수 다음 코드가 실행되려면 10초 이후에 가능
// 비동기 방식으로 fetchUser 함수 이후의 코드를 기다림 없이 실행 할 수 있도록 변경
function fetchFruit(){
    return 'apple';
}

const fruit = fetchFruit();
console.log(fruit);

console.log('fruit after');

/*
    결과
    apple
    fruit after
*/
 
// ------------------------------------------------------------------------------------------- //
// 1 Promise
// ------------------------------------------------------------------------------------------- //
const fruitPromise = new Promise((resolve, reject)=>{
       // setTimeout(()=>{
            resolve('apple');
        //},0)
    });

fruitPromise
    .then((result)=>{
        console.log('--------------promise--------------')
        console.log(result)
    })

// 또는 --------------------------------------------------
function fetchFruitPromise(){
    return new Promise((resolve,reject)=>{
        resolve('grape')
    })
}

const fruitPromise2 = fetchFruitPromise();
fruitPromise2.then(console.log)

/*
    결과
    --------------promise--------------
    apple
    grape
*/

// ------------------------------------------------------------------------------------------- //
// 2. async
// promise 대신 사용 가능하다.
// ------------------------------------------------------------------------------------------- //
async function fetchFruitAsync(){
    return '--------------async--------------\norange'
}

const fruitAsync = fetchFruitAsync();
fruitAsync.then(console.log)

/* 
    결과 
    --------------async--------------
    orange
*/

// ------------------------------------------------------------------------------------------- //
// 3. await : 기다리기
// async와 같이 사용된다.
// ------------------------------------------------------------------------------------------- //
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function getMango(){
    await delay(2000); // 2초 딜레이후 return
    
    // 에러 
    // throw 'error';

    return '🥭';
}

async function getBanana(){
    await delay(1000); // 1초 딜레이후 return
    return '🍌'
}

function pickFruits1(){
    return getMango().then(mango =>{
        return getBanana().then(banana => `pickFruits1 : ${mango} + ${banana}`)
    }); // 3초 딜레이 후에 반환
}
pickFruits1().then(console.log);

// 또는 --------------------------------------------------

async function pickFruits2(){
    
    /*
    const mango = await getMango();              // 순차적으로 진행
    const banana = await getBanana();            // getMango() 가 끝나야 실행 
    return `pickFruits2 : ${mango} + ${banana}`; // 순차적 진행으로 3초후에 반환
    */

    // 병렬 처리
    const mangoPromise = getMango()
    const bananaPromise = getBanana();
    const mango = await mangoPromise;               // 순차적으로 진행
    const banana = await bananaPromise;             // getMango() 가 끝나야 실행 
    return `pickFruits2 : ${mango} + ${banana}`;    // 2초(지정한 초) 후 실행

    // 에러 핸들링
    // try{
    //     const mango = await getMango();     // 순차적으로 진행
    //     const banana = await getBanana();   // getMango() 가 끝나야 실행 
    // }catch(error){
    //     console.log(error)
    // }
    // return `pickFruits2 : ${mango} + ${banana}`;
}

pickFruits2().then(console.log);

// Promise.all : 병렬 처리 promise api
function pickAllFruits(){
    return Promise.all([getMango(),getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);  // 🥭+🍌

// Promise.race : 배열에 전달된 첫번째 인덱스 값을 반환
function pickOneFruits(){
    return Promise.race([getMango(),getBanana()]);
}
pickOneFruits().then(console.log);  // 🍌

/* 
    결과 
    🍌
    pickFruits2 : 🥭 + 🍌
    🥭+🍌
    pickFruits1 : 🥭 + 🍌
*/