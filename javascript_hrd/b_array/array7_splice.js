let study = ['html','css','js','jquery']

let newStudy = study.splice(2,1);
document.write('반환된 배열 : ' , newStudy , '<br>');
document.write('변경된 배열 : ' , study , '<br>');

let newStudy2 = study.splice(2,1,"web");
document.write('<p> 메서드의 인수가 3개 이상인경우 </p>');
document.write('반환된 배열 : ' , newStudy2 , '<br>');
document.write('변경된 배열 : ' , study , '<br>');



