const chColor = document.querySelector(".changeColor");
const chText = document.querySelector(".changeText");
const chSize = document.querySelector(".changeSize");


console.dir(chColor);

function handleChangeColor(){
    chColor.style.color = "blue";
}
function handleChangeText(){
    chText.innerText = "클릭함!"
}
function handleChangeSize(){
    chSize.style.backgroundColor = "green";
    chSize.style.width = "300px";
}

chColor.addEventListener("mouseenter",handleChangeColor);
chText.addEventListener("click",handleChangeText);
chSize.addEventListener("mouseenter",handleChangeSize);
// chSize.onmouseenter = handleChangeSize;

// ==========================================================
function handleWindowResize(){
    document.body.style.backgroundColor = "pink";
}
function handleWindowCopy(){
    alert("복사했습니다!");
}

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);


function handleWindowOnline(){
    console.log("wifi가 연결되었습니다")
}
function handleWindowOffline(){
    console.log("wifi가 연결되지 않았습니다")
}

window.addEventListener("online",handleWindowOnline);
window.addEventListener("Offline",handleWindowOffline);