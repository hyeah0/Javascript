if(true){
    console.log("조건은 참입니다.")
}
else{
    console.log("조건은 거짓입니다.")
}

//if 
let age = 18;
if(age>20){
    console.log("운전이 가능합니다.")
}
else{
    console.log("운전이 불가능합니다.")
}

//다중 if
if(age > 20){
    console.log("운전이 가능합니다.");
}
else if(age >= 18){
    console.log("오토바이 운전이 가능합니다.");
}
else{
    console.log("운전이 불가능합니다.");
}

//다중 if // and, or
if( 18 < age && age < 20 ){
    console.log("운전이 가능합니다.");
}
else if(18 <= age || age < 20){
    console.log("오토바이 운전이 가능합니다.");
}
else{
    console.log("운전이 불가능합니다.");
}