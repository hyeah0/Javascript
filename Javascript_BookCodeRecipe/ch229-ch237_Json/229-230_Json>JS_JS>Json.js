/* 
json 문자열 >> `{ key : value, key : value , ....}`
key 값은 "" 안에 기재
value 값 중 문자형만 "" 안에 기재     
자바스크립트 문자열 >> {key : value, key: 'StringValue'}
*/

// JSON.parse(json형식데이터) >> Json 형식의 문자열을 Js 객체로 변환
// JSON.stringify(js객체) >> JS 형식의 객체를 Json 형식으로 변환

const jsonString = `{"students" : 40, "grade" : 4, "name" : "c반" }`;    // Json 문자열
const JsData = JSON.parse(jsonString)                                   // Json 문자열 >> 자바스크립트의 객체로 변환

const jsString = {a: 1000, b:'hi hello!'}                               // 자바스크립트 객체
const JsonData = JSON.stringify(jsString)                               // 자바스크립트 객체 >> Json 문자열

console.log('----json 문자열 >> js 객체 ------------')
console.log(JsData)
console.log(`JsData.students : ${JsData.students}`)
console.log(`JsData.grade : ${JsData.grade}`)
console.log(`JsData.name : ${JsData.name}`)

console.log('----js 객체 >> json 문자열 ------------')
console.log(JsonData)
console.log(JsonData.a)

/*
결과 
----json 문자열 >> js 객체 ------------
{ students: 40, grade: 4, name: 'c반' }
JsData.students : 40
JsData.grade : 4
JsData.name : c반
----js 객체 >> json 문자열 ------------
{"a":1000,"b":"hi hello!"}
 */
