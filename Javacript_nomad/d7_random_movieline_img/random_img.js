const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const randomeNum = Math.floor(Math.random()*img.length);
const randomImg = img[randomeNum];

console.log(randomImg);

const createTagImg = document.createElement("img");
createTagImg.src = `img/${randomImg}`;
document.body.appendChild(createTagImg);
// ㄴ body 안에서 가장 아래에
// document.body.prepend(createTagImg);
// ㄴ body 안에서 가장 위에 