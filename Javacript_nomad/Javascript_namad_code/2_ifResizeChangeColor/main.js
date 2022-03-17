// const backgroundColor = document.querySelector("body");
// const intViewportWidth = window.innerWidth;


// function changeBackground(){
//     if(intViewportWidth>=800){
//         backgroundColor.style.backgroundColor="yellow"
//     }
//     else if(intViewportWidth>=600){
//         backgroundColor.style.backgroundColor="pupple"
//     }
//     else if(intViewportWidth<=400){
//         backgroundColor.style.backgroundColor="blue"
//     }
// }

// backgroundColor.addEventListener("resize",changeBackground)

// console.dir(backgroundColor);
// console.log(intViewportWidth);

// ===================================================
const body = document.querySelector("body");

function active(){
    // const chClassName = backgroundColor.className;
    // if(intViewportWidth>=100){
    //     chClassName = "over100"
    // }
    // else{
    //     chClassName = "under100"
    // }

    // backgroundColor.style.backgroundColor="blue";
    // console.dir(backgroundColor);
    // console.log(intViewportWidth);
    // console.log(backgroundColor.style.width);

    const intViewportWidth = window.innerWidth;
    if(intViewportWidth>1200){
        body.classList.add("activeBig");
        body.classList.remove("activeMedium");
        body.classList.remove("activeSmall");
    }
    else if (intViewportWidth>700){
        body.classList.add("activeMedium");
        body.classList.remove("activeBig");
        body.classList.remove("activeSmall");
    }
    else{
        body.classList.add("activeSmall");
        body.classList.remove("activeBig");
        body.classList.remove("activeMedium");
    }
    console.log(intViewportWidth);
}

window.addEventListener("resize",active);