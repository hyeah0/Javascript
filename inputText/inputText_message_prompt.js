// 메세지를 통해 값 입력 받기
console.log('prompt')

let inputText = prompt('입력창에 보여질 메세지')
console.log(inputText)

let inputTxt = document.querySelector('.inputTxt')
inputTxt.style.color = 'pink'
inputTxt.innerHTML = inputText

