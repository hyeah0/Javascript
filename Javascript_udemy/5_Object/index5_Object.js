let patient = {
    name : "Kim",
    age : 18,
    disease : "cold"
}

console.log(patient);
console.log(patient.name);
console.log(patient["name"]);

patient.name = "Lee"
console.log(patient.name);

//객체와 배열 동시사용
let patientList = [{name:"Kim",age:10},{name:"Lee",age:13},{name:"Park",age:16}];

console.log(patientList);
console.log("첫번째 환자는 : " , patientList[0]);
console.log("첫번째 환자의 나이는? : " , patientList[0].age);