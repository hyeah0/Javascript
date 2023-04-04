// 즉각적으로 동기적으로 실행 callback
function printImmediately(){
    console.log('hi')
}

// 언제 실행될지 모르는 비동기 callback
function printWithDelay(print, timeout){
    setTimeout(print,timeout);
}

console.log('1')                                        // 동기
setTimeout(() => console.log('2'), 1000);               // 비동기
console.log('3')                                        // 동기
printImmediately()                                      // 동기
printWithDelay(()=>console.log('async callback'),1000)  // 비동기

// 1, 3, hi, 2, async callback
