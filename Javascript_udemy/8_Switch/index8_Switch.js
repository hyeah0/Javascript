let menu = 1;

if(menu == 1){
    console.log("파스타");
}
else if (menu == 2){
    console.log("치킨");
}
else if (menu == 3){
    console.log("피자");
}
else{
    console.log("메뉴를 골라야 합니다.");
}

switch (menu){
    case 1 : 
        console.log("파스타");
        break;
    case 2 : 
        console.log("치킨");
        break;
    case 3 : 
        console.log("피자");
        break;
    default :
        console.log("메뉴를 골라주세요");
}

if(menu <=3){
    console.log("범위안에 숫자입니다.");
}
else{
    console.log("범위밖에 숫자입니다.");
}

//--- 삼항연산식 ---//

let answer = menu <=3? "범위안에 숫자입니다.":"범위밖의 숫자입니다.";
console.log(answer);