let students = ["John" ,"Angelina" ,"Mary"];

result = students.length;

// array to string
result = students.toString();
result = students.join(" ");

// eleman silme
// result = students.pop(); //Son eleman silinir ve geri döndürülür
// result = students.shift(); // İlk eleman silinir ve geri döndürülür

// eleman ekleme
// result = students.push("Arthur"); // Dizinin sonuna eleman ekler.
// result = students.unshift("Arthur"); // Dizinin başına eleman ekler.

let brands1 = ["mazda" ,"toyota"];
let brands2 = ["opel" ,"renault"];
let brands3 = ["merecedes"];

// result = brands1.concat(brands2);
// result = brands1.splice(0, 0, brands2);
result = brands1.splice(0, 0, "bmw","audi"); // 0 indexinden başlayarak belirlediğim elemanları diziye ekledi
// ikinci sıfırın olduğu yerde silinecek index yazılır. 

console.log(result);
console.log(brands1);
// console.log(students);