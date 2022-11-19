// form
const guessNumberForm = document.querySelector("#guess-number-form");
// input
const betweenNumberTo = document.querySelector("#between-number__to");
const guessNumberInput = document.querySelector("#guess-number__input");
// result type
const resultAlert = document.querySelector(".result_alert");
const gameResult = document.querySelector(".game-result");
// result text
const gameResultText = document.querySelector(".game-result__text");
const gameResultOut = document.querySelector(".game-result__out");

function findResult(event){
    event.preventDefault();
    const betweenNumberToValue = parseInt(betweenNumberTo.value);
    const guessNumberInputValue = parseInt(guessNumberInput.value);
    const machinNumber = Math.floor(Math.random()*betweenNumberToValue)+1; 

    
    if(guessNumberInputValue < 0 || guessNumberInputValue > betweenNumberToValue){ 
        resultAlert.classList.remove("hidden");
        gameResult.classList.add("hidden");
        resultAlert.innerText = `0부터 ${betweenNumberToValue} 사이의 랜덤한 숫자를 입력해주세요`;
        return;
    }
    else if(guessNumberInputValue <= betweenNumberToValue){
        resultAlert.classList.add("hidden");
        gameResult.classList.remove("hidden");
        gameResultText.innerText = `You choose: ${guessNumberInputValue} , the machin choose : ${machinNumber}`;
        if(guessNumberInputValue === machinNumber){
            gameResultOut.innerText = "You woon!";
        }
        else{
            gameResultOut.innerText = "You lost!";
        };
    }
    // console.log('guess number :', guessNumberInputValue);
    // console.log('between number :', betweenNumberToValue);
    // console.log('machin number :', machinNumber);
}

guessNumberForm.addEventListener("submit",findResult);

