let cup= document.querySelector("#cup");
console.log(cup);

cup.onclick=function(event){
    alert("이벤트 유형 : " + event.type + ", 이벤트 발생 위치(클릭위치) :" + event.pageX + "," + event.pageY);
}