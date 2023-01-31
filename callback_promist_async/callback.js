/*
    자바스크립트는 동기적으로 실행된다.
    hoisting : var, function delaration 이 가장 위로 올라가는 것

    콜백함수란?
    함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수

    1. 동기 : 하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식 - 순차적 로직흐름
    2. 비동기 : 어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
    - 동시 효율적 처리 가능, 즉시 응답X 때문에 예상 밖 결과 나올수도 있다.

    콜백함수는 때로는 가독성이나 코드 재사용 면에서도 사용 된다.
    비동기 방식으로 작성된 함수를 동기 처리하기 위해 필요 하다.
 */

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
