let pics = document.getElementsByClassName ("pic");
console.log(pics);

let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");

for(i=0; i<pics.length; i++){
    pics[i].addEventListener("click",showLightbox);
}
// pics.addEventListener("click",showLightbox);

function showLightbox(){
    let bigLocation = this.getAttribute("data-src");
    // getAttribute : 속성네임
    console.log(bigLocation);
    lightboxImage.setAttribute("src",bigLocation);

    lightbox.style.display ="block";
}

// 라이트 박스 클릭시 이미지 닫기
lightbox.onclick = function(){
    lightbox.style.display="none";
}