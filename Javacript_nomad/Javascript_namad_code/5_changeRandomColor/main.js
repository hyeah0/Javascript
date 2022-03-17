const colors = [
    "#f9ebea",
    "#f5eef8",
    "#DAF7A6",
    "#FFC300",
    "#FF5733",
    "#C70039",
    "#82e0aa",
    "#58d68d",
    "#2ecc71",
    "#28b463",
    "#abebc6",
    "#d5f5e3",
    "#d7bde2",
    "#f4ecf7",
    "#e8daef",
    "#d2b4de",
    "#bb8fce",
    "#a569bd"
]
const btn = document.querySelector("button");
let body = document.querySelector("body");

function clickbtn(){
    const randomNum1 = Math.floor(Math.random()*colors.length);
    const randomNum2 = Math.floor(Math.random()*colors.length);
    const color1 = colors[randomNum1];
    const color2 = colors[randomNum2];

    body.style.background = `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`;
    // console.log(body.style.background);
    // console.dir(body);
    // console.log(color1);
    // console.log(color2);
}

btn.addEventListener("click",clickbtn);
