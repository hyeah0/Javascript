const btn = document.querySelector('button'); //button 태그
const key = document.querySelector('.key')
const value = document.querySelector('.value')
const classesValue = document.querySelector('.classesValue')  // key가 classes인 것의 value

// 버튼 클릭시 json 파일 가져오기
btn.addEventListener('click', () => {
  // 버튼 클릭 시
  async function load() {
    
    const data = await fetch('fetchJson.json')  // 파일 읽어오기
    const obj = await data.json()               // 받아온 json 파일 (JSON 형식)
    
    const jsonObj = JSON.stringify(obj)         // 받아온 파일을 json 형식 변환
    const jsObj = JSON.parse(jsonObj)           // json객체를 js 으로 변환
    
    console.log(obj)        //{name: 'A학교', classes: Array(2)}
    console.log(jsonObj)    //{"name":"A학교","classes":[{"students":40,"grade":4,"name":"C반"},{"students":20,"grade":2,"name":"B반"}]}
    console.log(jsObj)      //{name: 'A학교', classes: Array(2)}
    
    // id가 #log 인 태그에 텍스트 출력
    document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '  ')
    console.log('------------------------------------')
    
    // json의 key 값 and value
    let keys = Object.keys(obj)                           // key  
    let keysLen = Object.keys(obj).length                 // key 갯수
    let values = Object.values(obj)                       // key에 해당하는 values들 
    let classesLen = Object.values(obj['classes']).length // key 가 classes인 것의 value 의 갯수
    let classesValue = Object.values(obj['classes'])      // key 가 classes인 것의 value
    
    console.log(keys)                 // (2) ['name', 'classes']      
    console.log(keysLen)              // 2 
    console.log(values)               // (2) ['A학교', Array(2)] 
    console.log(classesLen)           // 2
    console.log(classesValue)         // (2) [{…}, {…}]
    console.log(classesValue[0].name) // c반 // key 가 classes인 것의 0번째 value의 key가 name인 값
    console.log('------------------------------------')

   let vals_arr = [];
   // vals_arr.sort(); // 오름차순 정렬
    for(let i=0; i < classesLen; i++){
         vals_arr.push(classesValue[i]);
         console.log(vals_arr[i]) // i = 0 >>> {students: 40, grade: 4, name: 'C반'}
         console.log(`vals_arr[i].name : ${vals_arr[i].name}`)  // i=0 >>> vals_arr[i].name : C반
    }
    console.log(vals_arr)   // (2) [{…}, {…}] == Object.values(obj['classes']) 
  }

  load()
})