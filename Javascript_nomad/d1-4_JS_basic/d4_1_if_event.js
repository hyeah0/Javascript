// 1. element 찾기
const title = document.querySelector("h2");

// 2. 이벤트에 반응할 function 만들기
function handleClick(){
    // const cureentColor= title.style.color;
    // let newColor;
    // console.log(currentColor);
    // currentColor = "pink";
    // // title.style.color="pink";
    // console.log(currentColor);
    // // console.log(title.style.color);

    if(title.style.color === 'pink'){
        title.style.color = "blue";
    }
    else {
        title.style.color = "pink";
    }
    console.log(title.style.color);
}

// 3. 이벤트 부르기
title.addEventListener("click",handleClick);



