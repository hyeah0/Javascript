let cup= document.getElementById("cup");
console.log(cup);


//함수 호출로 이미지 변경 

// cup.addEventListener("mouseover",changePic);
// cup.addEventListener("mouseout",originPic);

// function changePic(){
//     cup.src = "./assets/coffee-2714970_640.jpg" ;
// }

// function originPic(){
//     cup.src = "./assets/coffee-171653_640.jpg" ;
// }

//메서드 안에 함수 선언하기
cup.addEventListener("mouseover",function(){
    cup.src="./assets/coffee-2714970_640.jpg"
});
cup.addEventListener("mouseout",function(){
    cup.src="./assets/coffee-171653_640.jpg"
});
