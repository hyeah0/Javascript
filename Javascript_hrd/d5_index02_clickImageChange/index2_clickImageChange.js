let cup= document.querySelector("#cup");
console.log(cup);

cup.onclick = changePic;
// cup.onclick = changePic();
function changePic(){
    cup.src="./assets/coffee-2714970_640.jpg";
}