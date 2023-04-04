# 자바스크립트

- 자바스크립트는 동기적으로 실행된다.

> hoisting (호이스팅)
>
> > • 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
> > <br> • 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언
> > <br> • var, function delaration 이 가장 위로 올라가는 것

## 콜백함수란?

- 함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수

    <table>
    <tr>
        <td>
        <b>동기</b> 
        <br>하나의 요청이 오면 완료가 된 후 다음 요청을 실행하는 방식
        <br>순차적 로직흐름(직렬적)
        </td>
    </tr>
    <tr>
        <td>
        <b>비동기</b> 
        <br>어떤 요청이 오면 완료가 되기 전에 다음 요청을 실행하는 방식
        <br>한번에 여러 태스크가 동시에 병렬적으로 실행
        <br>예시)Web API, Ajax, setTimeout 
        </td>
    </tr>
    </table>

- 동시 효율적 처리 가능, 즉시 응답 하지 않기 때문에 예상 밖 결과 나올수도 있다.
- 콜백함수는 때로는 가독성이나 코드 재사용 면에서도 사용 된다.
- 비동기 방식으로 작성된 함수를 동기 처리하기 위해 필요 하다.

  ### - setTimeout

  ```
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
  ```

<br>

## Promise

- <b>promise</b>
  <br>자바스크립트 안 내장 객체
  <br>비동기 수행시 callback 함수 대신 사용

### 1. 상태(state)

| 상태 종류 | 설명                                       |
| --------- | ------------------------------------------ |
| pending   | 비동기 처리가 아직 수행되지 않은 상태      |
| fulfilled | 비동기 처리가 수행된 상태 (성공)           |
| rejected  | 비동기 처리가 수행된 상태 (실패)           |
| settled   | 비동기 처리가 수행된 상태 (성공 또는 실패) |

### 2. 제공자 vs 사용자 (Producer vs Consumer)

- Producer 제공자

  ```
  const 변수명 = new Promise((resolve, reject) =>{
      setTimeout(() => {
          기능 수행시 >> resolve('호출 내용');
          기능 에러시 >> reject(new Error('no network : 에러 사유 명시'))
      }, n초뒤 실행)
  }
  ```

- Consumer 사용자

  ```
  변수명.then((a)=>{ console.log(a) });            👉 a == resolve 함수 가로 안에 값
      .catch((error)=>{ console.log('error')});  👉 error == reject 가로 안에 값
      .finally(()=>{ console.log() });           👉 기능수행, 기능에러 상관없이 무조건 실행 값
  ```

1.  비동기 함수 내에서 Promise 객체를 생성하고 그 내부에서 비동기 처리를 구현한다.
2.  비동기 처리에 성공하면 resolve 메소드를 호출, 비동기 처리에 실패하면 reject 메소드를 호출한다.

    1. resolve 메소드의 인자로 비동기 처리 결과를 전달 하는데,
       <br>이 처리 결과는 Promise 객체의 후속 처리 메소드(.then())로 전달된다.

    2. 이때 reject 메소드의 인자로 에러 메시지를 전달한다.
       <br>이 에러 메시지는 Promise 객체의 후속 처리 메소드(.catch())로 전달된다.

### 3. 예시

```
/* --------------------------------------------------------------
    Producer 제공자
----------------------------------------------------------------- */
const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('success')                             // 기능 수행시 resolve 콜백함수 호출
        // 또는
        reject(new Error('no network : 에러 사유 명시'))  // 에러
    }, 2000);
})

/* --------------------------------------------------------------
    Consumers 사용자
    then, catch, finally
----------------------------------------------------------------- */
promise.then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })
    .finally(()=>{ console.log('성공, 실패 상관없이 호출') });
```

- 결과

```
producer 가 resolve 일때 ⬇️
  success
  성공, 실패 상관없이 호출

producer 가 reject 일때 ⬇️
  Error: no network : 에러 사유 명시 at promise.js:8:16
  성공, 실패 상관없이 호출
```

## async await

- async와 await라는 특별한 문법을 사용하면 Promise 좀 더 편하게 사용할 수 있다.
- <b>function</b> 키워드 <b>앞에 async</b> 를 붙여주고
  <br><b>비동기로 처리되는 부분 앞</b>에는 <b>await</b>를 붙여준다.

### async

- 함수에 async만 붙이면 자동 Promise객체로 인식되고 <b>return값은 resolve()</b>값과 똑같다.

  - 그러나 일반 함수처럼 정말 문자열이 리턴되는 것은 아니다.
  - 리턴값은 Promise{<resolved>: "1"} 이다.

  ```
  async function f() {
    return '1';
    == Promise.resolve('1');
  }
  ```

### await

- await는 async 함수 안에서만 동작한다.
- await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다린다.
- 프라미스가 처리가 완료되어 resolve(값) 되면 값만 따로 추출해서 리턴한다.
- 프라미스가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않는다.

  ```
  async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    alert(result); // "완료!"
  }

  f();
  ```

  ```
  async function f2(){
    let result = await Promise.resolve("hello"); // 프라미스 객체의 then결과를 바로 받는다.
    return result;
  }

  f2(); // hello
  ```
