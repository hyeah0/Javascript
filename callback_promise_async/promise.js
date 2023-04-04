// 1. Producer
// promise를 생성하는 순간 바로 실행(executor 함수가 실행) : 사용자가 요구하지 않았는데 실행되는 점은 유의
const promise = new Promise((resolve, reject) =>{
    console.log('promise')

    setTimeout(() => {
        //resolve('success')                            // 기능 수행시 resolve 콜백함수 호출
        reject(new Error('no network : 에러 사유 명시'))    // 에러 
    }, 2000);
})


// 2. Consumers : then, catch, finally
promise
    .then((value) => {      // promise가 잘 수행 될 경우 resolve 호출 
        console.log(value)
    })
    .catch((error) => {     // promise에서 에러 날 경우 reject 호출
        console.log(error)
    })
    .finally(()=>{
        console.log('성공, 실패 상관없이 호출')
    })

// 3. Promise chaing
// promise 연결

// Producer
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(1), 1000)
})

// Consumers
// then 에서 바로 값전달 뿐만 아니라 promise 전달도 가능하다.
fetchNumber
    .then((num)=>{return num * 2})    // 1 * 2
    .then((num)=>{return num * 3})    // 2 * 3
    .then((num)=>{
        // Producer
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve(num-1)},1000);   // 6 - 1
        })
    })
    .then((num)=>{ console.log(num)})                // 5


// --------------------------------------------------------------------------------------------------------- //
// 계란 후라이 만들기 
// --------------------------------------------------------------------------------------------------------- //
const getHen = () => 
    new Promise((resolve, reject)=>{
        setTimeout(() => resolve('🐓'), 1000);
    })


// hen == 🐓
// const getEgg = henResult =>
//     new Promise((resolve, reject)=>{
//         setTimeout(() => resolve(`${henResult} => 🥚`), 1000);
//     })

// 에러발생
const getEgg = henResult =>
    new Promise((resolve, reject)=>{
        setTimeout(() => reject(`${henResult} => 🥚`), 1000);
    })


// result == 🐓 => 🥚
const cook = eggResult =>
    new Promise((resolve,reject)=>{
        setTimeout(() => resolve(`${eggResult} => 🍳`), 1000);
    })

getHen()
    .then(henResult => getEgg(henResult))
    .then(eggResult => cook(eggResult))
    .then(cookResult => console.log(cookResult))    // 에러가 없을 경우 🐓 => 🥚 => 🍳
    .catch(console.log) // getegg에서 에러 🐓 => 🥚


// 받아오는 value값을 다음 함수에서 호출할때 생략 가능(인자가 1개일때만 가능)
getHen()
    .then(getEgg)
    .catch(error=>{
        return '🥐'         // [🐓 => 🥚] => [🥐]으로 대체, 에러 발생시 다른 값 전달
    })
    .then(cook)
    .then(console.log)      // 에러가 없을 경우 🐓 => 🥚 => 🍳
    .catch(console.log)     // 에러가 있을 경우 🥐 => 🍳
