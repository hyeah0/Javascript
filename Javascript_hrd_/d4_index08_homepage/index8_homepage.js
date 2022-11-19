// 이미지 클릭시 이미지 파일 설명 console 에서 확인 가능

function displaySrc(){

let cup = document.querySelector('#cup');
console.log( cup.getAttribute('src'));
// alert("이미지 소스 : " + cup.getAttribute('src'));

}

// 이미지 클릭시 다른 이미지로 변경

// function changePic(){
//     let newPic = this.src;
//     cup.setAttribute("src",newPic);
// }


let smallPic = document.querySelectorAll(".small");
console.log(smallPic);

for(let i=0; i<smallPic.length; i++){
    smallPic[i].addEventListener("click",changePic);
}

function changePic(){
    let newPic = this.src;
    cup.setAttribute("src",newPic);
}


// ==================

let view = document.querySelector("#view");
// .onclick=displayTime;

view.onclick = 
function detail(){
    let detail = document.querySelector('#detail');
    detail.style.display ='block';
    // detail.style.display ='none';
}