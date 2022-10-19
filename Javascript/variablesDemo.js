var today = new Date().getFullYear();

var student1 = "Ada Bilgi";
var birthDate1 = 2004;
var age1 = today - birthDate1;
var averageScore1 = (70 + 70 + 80) / 3;
var result1 = (averageScore1 >= 50);

console.log(student1);
console.log(age1);
console.log(averageScore1);
console.log(result1);

var student2 = "Fatih Çamlı";
var birthDate2 = 2000;
var age2 = today - birthDate2;
var averageScore2 = (50 + 40 + 28) / 3;
var result2 = (averageScore2 >= 50);


console.log(student2);
console.log(age2);
console.log(averageScore2);
console.log(result2);


console.log("Öğrencimiz " + student1 + "'nin not ortalaması = " + averageScore1);
console.log("Öğrencimiz " + student2 + "'nın not ortalaması = " + averageScore2);

console.log(today);