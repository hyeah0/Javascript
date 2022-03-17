let colors = ['red','orange','yellow','green','black','white']

let colors1 = colors.slice(2);
document.write('<p> slice(2) 인덱스 2번부터 배열 끝까지 </p>');

document.write('반환된 배열 : ' , colors1 , '<br>');
document.write('변경된 배열 : ' , colors , '<br>');

let colors2 = colors.slice(2,4);
document.write('<p> slice(2,4); 인덱스 2번부터 4번 전까지 </p>');

document.write('반환된 배열 : ' , colors2 , '<br>');
document.write('변경된 배열 : ' , colors , '<br>');




