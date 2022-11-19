// document.getElementById("title");

const text1 = document.getElementById("text1I");
console.log(text1);
console.dir(text1);

text1.innerText="change Text";
console.log(text1.id);
console.log(text1.className);

// ======================== 
const text2 = document.getElementsByTagName("h1");

const text2_1 =document.querySelector(".text2");

const text2_2 = document.querySelector(".text2 h1");

const text2_3 = document.querySelectorAll(".text2 h1");

console.log('text2', text2);
console.log('text2_1',text2_1);
console.log('text2_2',text2_2);
console.log('text2_3',text2_3);
console.log(text2_3[2]);