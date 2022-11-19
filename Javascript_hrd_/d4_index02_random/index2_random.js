let seed = prompt("전체 응모자 수:");
let picked = Math.floor((Math.random()*seed)+1); //랜덤으로 수뽑기
// random이 일 경우 대비 +1을 넣는다

//floor : 소수점 이하는 제거한다

// let picked = Math.random(); 

document.write("<p>전체 응모자 수 : ", seed , "명 입니다.</p>");
document.write("<p>당첨자는 : ", picked , "번 입니다.</p>");