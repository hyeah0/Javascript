//----- 문제1 -----//

let test1 = document.getElementById("test1_result");
let great = "안녕 내 이름은 제시카야";
test1.textContent = great;

// funciton greet(){
//     console.log("안녕 내 이름은 제시카야")
// }

//----- 문제2 -----//

let test2Name = document.getElementById("test2_name")
let test2button = document.getElementById("test2_button");
let test2Result = document.getElementById("test2_result");

test2button.addEventListener("click",test2)
test2Name.addEventListener("focus",function(){test2Name.value=""})

function test2(){
    let test2NameV = test2Name.value;
    // let test2Great = "안녕 내 이름은 " + test2NameV + "야";
    let test2Great = `안녕 내 이름은 ${test2NameV}야`;

    console.log(test2NameV);
    test2Result.textContent = test2Great;
}

// funciton greet(name){
//     console.log("안녕 내 이름은",name,"야");
//     return name;
// }


//----- 문제3 -----//

let test3Result = document.getElementById("test3_result");

 function meetAt(year, month, date){
     let todayYear = year;
     let todayMonth = month;
     let todayDate = date;

     if(todayDate){
         return `${todayYear}/${todayMonth}/${todayDate}`
     }
     if(todayMonth){
        return `${todayYear}년${todayMonth}월`
    }
    if(todayYear){
        return `${todayYear}년`
    }
 }

 console.log(meetAt(2022,01,31));
 console.log(meetAt(2022,01));
 console.log(meetAt(2022));

// test3Result.textContent = meetAt(2022,01,31);
test3Result.textContent = meetAt(2022,01);
// test3Result.textContent = meetAt(2022);

//  let test3Date = document.getElementById("test3_date");

//  function test3(test3Date){
//      let test3DateV = test3Date.value; 
//      console.log(test3DateV);
//  }
 
//  test3;

//----- 문제4 -----//

function findSmallestElement(arr) {
	let result = arr[0];
	if (arr.length === 0 ) {
		return 0;
	}
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
	return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)

//////////////////////////////////////////////////////////

// let test4number = document.getElementById("test4_number");
// let test4button = document.getElementById("test4_button");
// let test4reset = document.getElementById("test4_reset");
// let test4Result = document.getElementById("test4_result");

// let test4history =[];

// test4button.addEventListener("click",test4);
// test4reset.addEventListener("click",test4resetF);

// function test4(){
//     let test4numberV = test4number.value;
    
  
//     if(test4numberV == ""){
//         test4numberV = "0";
//     }

//     test4history.push(test4numberV);
//     console.log(test4history);
//     console.log("배열 인덱스 수 : ", test4history.length);
    
//     for(let i=0; i<test4history.length; i++){

//         console.log("i : ",i)
//         console.log("test4history[i] ", test4history[i]);
//     }
  
// }

// function test4resetF(){
//     test4history.splice(0,test4history.length);
//     console.log(test4history);
// }


//----- 문제5 -----//

let unit = [50000,10000,5000,1000,500,100];
let test5number = document.getElementById("test5_number");
let test5button = document.getElementById("test5_button");
let test5Result = document.getElementById("test5_result");
let test5History =[];

test5button.addEventListener("click",test5);

function test5(){
    let test5numberV = test5number.value;

    console.log("==============");
    for(let i=0; i<unit.length; i++){
        
        let num = Math.floor(test5numberV/unit[i]);
        let result = unit[i]+"x"+num;
        test5History.push(result);
        console.log(unit[i]+"x"+num);

        test5numberV = test5numberV - (unit[i]*num);
        // console.log("test5numberV : "+ test5numberV);
    }
    test5Result.innerText = test5History;
}


