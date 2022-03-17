
let fruit = ["사과","바나나","포도","오렌지"];

console.log(fruit);
console.log(fruit[0]);

document.write('배열 : ' , fruit , '<br>');
document.write('<code><pre>let fruit = ["사과","바나나","포도","오렌지"]</pre></code>');
document.write('과일 배열에서 0번째 : ',fruit[0]);

//=========================================//
document.write('<h3>배열과 같이 쓸 수 있는 함수</h3>')

document.write('<h4><b>pop</b> = 배열에서 가장 끝 요소를 제외함</h4>')

fruit.pop();
document.write('배열 : ' , fruit , '<br>');
//=========================================//
document.write('<h4><b>push</b> = 배열에서 가장 끝에 추가함</h4>')

fruit.push("파인애플");
document.write('배열 : ' , fruit , '<br>');
//=========================================//
document.write('<h4><b>includes</b> = 배열에 포함된 요소 찾기</h4>')

console.log(fruit.includes("파인애플"));
document.write('배열 : ' , fruit , '<br>');
document.write('<p>fruit.includes("파인애플") : true 값 반환</p>')
//=========================================//
document.write('<h4><b>indexOf</b> = 배열에 포함된 요소의 인덱스 번호 찾기</h4>')

console.log(fruit.indexOf("파인애플"));
document.write('배열 : ' , fruit , '<br>');
document.write('<p>fruit.indexOf("파인애플") : 3 </p>')
//=========================================//
document.write('<h4><b>slice</b> = 인덱스 시작점 이후에 있는 요소들은 자른다. <br><small>반환은 잘린값이 반환이 된다.<br> 기존의 배열은 수정되지 않는다</small></h4>')

// console.log(fruit.slice(2));
// document.write('배열 : ' , fruit , '<br>');
// document.write('<p>fruit.slice(2) : 포도, 파인애플 </p>')

console.log(fruit.slice(1,3));
document.write('배열 : ' , fruit , '<br>');
document.write('<p>fruit.slice(1,3) : 바나나, 포도 </p>')
document.write('<p>fruit.slice(1,3) : 인덱스 1번부터 인덱스 3번 이전까지 자른다(3번은 포함 안됨(1번부터 2번까지 잘림)</p>');

//=========================================//
document.write('<h4><b>splice</b> = 인덱스 시작점 이후부터 n개 요소를 제외한다 <br><small>제외된 값은 배열에서 완전히 제거된다=기존배열 수정된다</small></h4>')

console.log(fruit.splice(2,1));
document.write('배열 : ' , fruit , '<br>');
document.write('<p>fruit.splice(1,3) : 포도</p>')
