console.log('fetchTest')
const testJs_1 = 
`{"book_num":35,"order_month":2,"cgy_num":"N003","book_name":"손톱 물어뜯는 유령","book_price":15000,"book_qty":100,"book_cont":"자꾸만 손톱을 물어뜯는 친구들을 위한 좋은 습관 기르기 제1탄! 손톱을 물어뜯으면 장난꾸러기 유령이 찾아온다고?","book_img":"bookn00335.jpeg"}`
console.log(testJs_1)  
const JsData_1 = JSON.parse(testJs_1)    
console.log(JsData_1)

let th = document.querySelectorAll(".th")
let tr = document.querySelectorAll('.tr_in')    // 데이터가 들어갈 행 
let td = document.querySelectorAll('.td_in')    // 데이터가 들어갈 행 
console.log(tr)
console.log(`th.length : ${th.length},
tr.length : ${tr.length},
td.length : ${td.length}
`)
console.log(tr[0].childNodes)                   // tr[index]의 자식 노드
console.log(tr[0].childNodes[1].textContent)
console.log(tr[0].childNodes[3].textContent)
console.log(td[0].textContent)
console.log('------------------------------------')

// json 형태로 만들기 위해 가장 첫번째에 `[ 추가/ {} 끝에 , 추가 / 마지막에 ]`
const testJs_2 = 
`[{"book_num":35,"order_month":2,"cgy_num":"N003","book_name":"손톱 물어뜯는 유령","book_price":15000,"book_qty":100,"book_cont":"자꾸만 손톱을 물어뜯는 친구들을 위한 좋은 습관 기르기 제1탄! 손톱을 물어뜯으면 장난꾸러기 유령이 찾아온다고?","book_img":"bookn00335.jpeg"},
{"book_num":38,"order_month":5,"cgy_num":"N003","book_name":"민들레사자의 꿈","book_price":13000,"book_qty":100,"book_cont":"민들레사자의 특별하고도 환상적인 여행! 아름다운 그림으로 현실과 상상을 넘나드는 그림책","book_img":"bookn00338.jpeg"},
{"book_num":39,"order_month":6,"cgy_num":"N003","book_name":"나무 로봇과 통나무 공주","book_price":14000,"book_qty":100,"book_cont":"★뉴욕타임스 올해의 그림책 ★뉴욕공립도서관 올해의 그림책","book_img":"bookn00339.jpeg"},
{"book_num":40,"order_month":1,"cgy_num":"N003","book_name":"내 꿈은 말이야!","book_price":13000,"book_qty":100,"book_cont":"꿈이 부풀어 오르는 모카의 직업 이야기 표지부터 등장하는 모카는 설레는 미소로 자신의 꿈에 대해 생각해요. 한 장 한 장 넘길수록 사랑스러운 모카의 꿈이 펼쳐지지요. 우주 비행사가 되어 우주로 가고, 가수가 되어 노래하고, 댄서가 되어 신나게 춤추고, 정원사가 되어 나무를 다듬어요. ","book_img":"bookn00340.jpeg"},
{"book_num":41,"order_month":9,"cgy_num":"N003","book_name":"나는 돌멩이","book_price":14000,"book_qty":100,"book_cont":"골목길에 덩그러니 혼자 입을 꾹 다물고 있는 돌멩이를 보며 고양이는 자신과 같다고 생각한다. 아무도 신경 쓰지 않는 존재, 그것이 바로 나라고. 고양이는 몸 안에 “안녕. 반가워. 오늘은 어땠어?” 같은 말을 깊이 넣어 둔 채 입을 다물어 버린다. ","book_img":"bookn00341.jpeg"}]`

console.log(testJs_2)  
console.log('------------------------------------')

const JsData_2 = JSON.parse(testJs_2)    
console.log(JsData_2)
console.log('------------------------------------')

let keys = Object.keys(JsData_2)
let values = Object.values(JsData_2)
console.log(keys)
console.log(values)
console.log(values[0].book_num)

for(let i=0; i<tr.length; i++){
    
    tr[i].childNodes[1].textContent = values[i].book_num
    tr[i].childNodes[3].textContent = values[i].order_month
    tr[i].childNodes[5].textContent = values[i].cgy_num
    tr[i].childNodes[7].textContent = values[i].book_name
    tr[i].childNodes[9].textContent = values[i].book_price
    tr[i].childNodes[11].textContent = values[i].book_qty
    tr[i].childNodes[13].textContent = values[i].book_cont
    tr[i].childNodes[15].textContent = values[i].book_img
    
}
