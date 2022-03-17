console.log(20 + 30);
console.log("20" + "30");
console.log("Hello" + " " + 2021);
console.log(1 + 2 * 3);
console.log((1 + 3) ** 2);
console.log(1 / 0);
console.log(6 % 2);
console.log(7.5 % 2);

console.log(5 == "5");
console.log(5 === "5");
console.log(5 != 5.0);
console.log(5 !== 5.0);
console.log("true" === true);
console.log(5 <= 5.0);
console.log(5 >= 5);

///================문제2================///

let test2Num = document.getElementById("test2_Num");
let test2Click = document.getElementById("test2_Click");
let test2Ans = document.getElementById("test2_Ans");

test2Click.addEventListener("click",result);

function result(){
    let test2NumValue = test2Num.value;
    console.log(test2NumValue);

    if(test2NumValue==0){
        test2Ans.textContent = "0입니다."
    }
    else if(test2NumValue<0){
        test2Ans.textContent = "음성입니다."
    }
    else{
        test2Ans.textContent = "양성입니다."
    }
}

///================문제3================///
let score = document.getElementById("score");
let rating = document.getElementById("rating");
let test3Click = document.getElementById("test3_Click");

test3Click.addEventListener("click",test3Ans);

function test3Ans(){
    let scoreValue = score.value;
    console.log(scoreValue);
    console.log(scoreValue>=90);

    if(scoreValue < 0|| scoreValue > 100){
        rating.textContent = "점수는 0점부터 100점 까지 입력이 가능합니다."
        return;
    }

    if(scoreValue>=90){
        rating.textContent = "등급 : A";
    }
    else if (scoreValue >= 80){
        rating.textContent = "등급 : B";
    }
    else if (scoreValue >= 70){
        rating.textContent = "등급 : C";
    }
    else if (scoreValue >= 60){
        rating.textContent = "등급 : D";
    }
    else{
        rating.textContent = "등급 : F";
    }
}

///================문제4================///
let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격!")
  }else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
  }else {
    console.log("탈락!")
  }