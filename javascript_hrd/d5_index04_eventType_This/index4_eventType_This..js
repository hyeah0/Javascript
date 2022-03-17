let cup= document.querySelector("#cup");
console.log(cup);

cup.onclick=function(event){
    alert("클릭한이미지 파일 : " + this.src);
    // alert("클릭한이미지 파일 : " + cup.src);
}