//-- 문제1 1부터 100까지 더하는 for문 -- //

let sum=0;
for(let i=0; i<=100; i++){
    sum += i ;
}
console.log(sum);

//-- 문제2 1부터 100까지 홀수만 출력 -- //

for(let j=1; j<=100; j+=2){
    console.log("홀수:" + j);
}

//-- 문제3 1부터 50까지 369 결과를 프린트 --//

for(let a=0; a<=50; a++){
    let stringValue=a.toString();
    let result = "";

    console.log("==================================")
    console.log("stringValue : "+stringValue);
    console.log("stringValue.length : "+stringValue.length);


    for(let b=0; b<stringValue.length; b++){
        if(stringValue[b] == "3" || stringValue[b] == "6" || stringValue[b] == "9"){

            result+="짝"
            
            console.log("b : " + b);
            console.log("stringValue[b] : "+stringValue[b]);

            console.log("stringValue[0] : "+stringValue[0]);
            console.log("stringValue[1] : "+stringValue[1]);
            
            console.log("result : " + result);
        }
  
    }

    console.log("result.length : " + result.length)
  
    console.log(result.length>0?result:a)
  
    // if(a%3==0){
    //     console.log("짝");
    // }
    // else{
    //     console.log(a);
    // }
}

//-- 문제4 주어진 숫자가 소수이면 true, 아니면 false --//
console.log("============ 문제4 ============")

let n =prompt("숫자를 입력하세요");
let isPrime =true;

for(let c=2; c<n; c++){
    if(n%c == 0){
        isPrime = false;
        // n을 c로 나누었을때 남은값이 0이 한번이라도 있으면 소수가 아니다 
    }
    // else{
    //     isPrime = true;
    // }
    console.log("c : " + c);
    console.log("n%c : " + n%c);
    console.log("isPrime : " + isPrime);
    console.log("========")
}
console.log(isPrime);