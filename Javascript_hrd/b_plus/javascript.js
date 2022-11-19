// 글씨를 클릭시 글씨색 변경<js> 
let clickText = document.querySelector(".clickText");
clickText.onclick = function(){
    clickText.style.color = "pink";
}
//----------------------------------//

// 알림창
// alert("자바스크립트 복습");

//확인 취소 알림창
// let reply = confirm("저장하시겠습니까?");
// console.log(reply);

//입력 알림창
// let favBread = prompt("좋아하는 빵을 적어주세요","메론빵");
// console.log(favBread);
// let myFavBread = document.getElementById("myFavBread");
// myFavBread.textContent=("내가 좋아하는 " + favBread);

//----------------------------------//
//현재시간

let currentTime = document.getElementById("time");
let now = new Date();
let h = now.getHours();
let display = now.toLocaleDateString();

currentTime.innerHTML=("오늘은 : "+ display + "<br> 현재시간은 : " + h + "시 입니다.");


//----------------------------------//
//조건값 if

let userInputNum1 =document.getElementById("userInput_Num1");
let userInputNum2 =document.getElementById("userInput_Num2");
let numberButton =document.getElementById("number_button");
let resultArea = document.getElementById("result_Area");
let putIfElse = document.getElementById("if");
// let history=[];

numberButton.addEventListener("click",putNumber);

function putNumber(){
     let userInputNum1Value = userInputNum1.value;
     let userInputNum2Value = userInputNum2.value;

    resultArea.textContent =  ("작성한 값은 :" + userInputNum1Value + "," + userInputNum2Value);

if(userInputNum1Value=="" || userInputNum2Value==""){
    putIfElse.textContent="한개 이상이 공란입니다"
    return; 
}
else if (userInputNum1Value>=5 && userInputNum2Value>=5){
    putIfElse.textContent="두 숫자 모두 5 이상입니다."
    return; 
}
}

//----------------------------------//
//입장객에 따라 몇 줄이 필요한지

let total = document.getElementById("total");
let person = document.getElementById("person");
let set = document.getElementById("set");
let seats = document.getElementById("seats");


set.addEventListener("click",seatsSet);

 function seatsSet(){
     let totalValue = total.value; // 입장객수
     let personValue = person.value; // 한줄에 앉을 수 있는 인원
     let rowNum;
    // rowNum 정리
    if(totalValue % personValue == 0){
        rowNum = parseInt(totalValue/personValue);
    }
    else{
        rowNum = parseInt(totalValue/personValue)+1;
    }

    console.log(totalValue);
    console.log(personValue);
    console.log(rowNum);


    let sum=1;
     
     for(i=1; i<=rowNum; i++){
         for(j=1; j<=personValue; j++){
            // seats.textContent= ("좌석 : " + seatsNum);
            document.write("좌석" + sum);

            if(sum < totalValue){
                sum +=1;
            }
            else{
                break;
            }
            
         }
         document.write('<br>')
     }
     
 }

// console.log(seats);
// console.log(totalValue);
// console.log(rownum);




//----------------------------------//
//switchCase

let medalType = document.getElementById("medalType");
let medalCheck = document.getElementById("medalCheck");
let medalPrice = document.getElementById("medalPrice");

medalCheck.addEventListener("click",medal);

function medal(){
    
    let medalTypeValue = medalType.value;
    console.log(medalTypeValue);

    switch(medalTypeValue){
        case "금" : medalPrice.textContent= "100만원입니다.";
                    break;
        case "은" :medalPrice.textContent= "80만원입니다.";
                    break;
        case "동" : medalPrice.textContent= "50만원입니다.";
                    break;
        default : medalPrice.textContent= "상금이 없습니다";
    }
}
