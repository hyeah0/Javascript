for(let i =0; i<10; i++){
    console.log("for",i);
}

//--- 짝수만 나오게 ---///
for(let i =0; i<10; i++){
    if(i%2==0){
        console.log("for 짝수 : ",i);
    }
}
console.log("============")

//--- 짝수만 나오게(조금더 빨리 데이터 나옴)
for(let i =0; i<10; i+=2){    
    console.log("for 짝수 : ",i);
}


let timesTable = document.getElementById("timesTable");
// timesTable.innerHTML = "<strong>구구단</strong>"

document.write("for 문을 이용한 구구단<br>");

function times(){
    for(let i=2; i<=9; i++){
        document.write(i + "단");
        document.write("<br>")
        for(let j=1; j<=9; j++){
            document.write(i + " X " + j + " = " + i*j )
            document.write("<br>")
        }
    }
}
times()

//--- for문, 배열과 함께 사용 ---/// 
let fruit = ["apple","banna","mango","tomato"];

for(let i=0; i<fruit.length; i++){
    console.log("배열(인덱스):" + i + "," + fruit[i]);
}


//--- while문 ---///
let a=1;
while(a<10){
    console.log("while문 실행"+ a);
    a++;
}
