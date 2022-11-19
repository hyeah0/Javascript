// 1. element 찾기
const title = document.querySelector(".ifEvent h2");

// 2. 이벤트에 반응할 function 만들기
function handleClick(){
    const clickedClass = "active";
  
    console.dir(title);
    console.log('title.className.current : ', title.className);

    if(title.className === ''){
        title.className = clickedClass;
    }
    else{
        title.className = '';
    }
   
    console.log('title.className.new : ', title.className);
}

// 3. 이벤트 부르기
title.addEventListener("click",handleClick);

// =========상단 보안====================
const changeClassName = document.querySelector(".firstClassName");

function changeClass(){
    const clickedClass = "active";
    if(changeClassName.classList.contains(clickedClass)){
        changeClassName.classList.remove(clickedClass);
    }
    else{
        changeClassName.classList.add(clickedClass);
    }
}

changeClassName.addEventListener("click",changeClass);

// =========상단 보안(toglle 사용 해서 한줄로 기재)====================
const useToggle = document.querySelector(".fstClassName");

function toggleChangeClass(){
    useToggle.classList.toggle("active");
}

useToggle.addEventListener("click",toggleChangeClass);

