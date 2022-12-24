// "Elma,armut,muz,çilek" elemanlarına sahip bir dizi oluşturun.

// let fruits = ["Apple", "Pear", "Banana", "Strawberry"];

// console.log(fruits);

// Bu dizi kaç elemanlıdır ?

// console.log(fruits.length);

// Dizinin ilk ve son elemanı nedir ?

// console.log("Dizinin ilk elemanı: " + fruits.shift());
// console.log("Dizinin son elemanı: " + fruits.pop());

// Apple dizinin bir elemanı mı?

// console.log(fruits.includes("Apple")); 

// Dizinin sonuna kiraz ekle

// console.log(fruits.push("Cherry"));
// console.log(fruits);

// Dizinin son 2 elemanını sil.

// console.log(fruits.splice(0, 3));

// Aşağıdaki elemanları dizi içerisinde sakla ve her öğrencinin yaşın hesapla.

    /*
        Öğrenci 1 : Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2 : Ada Bilgi 2012 (80,80,90)
        Öğrenci 3 : Ahmet Turan 2009 (60,60,70)
    */

simdi = new Date();

var sonuc = simdi;
var sonuc = simdi.getFullYear();

let ogrenci1 = ["Yiğit Bilgi, ", 2010, [70,60,80]];
let ogrenci2 = ["Ada Bilgi, ", 2012, [80,80,90]];
let ogrenci3 = ["Ahmet Turan, ", 2009, [60,60,70]];

var yas1 = sonuc - ogrenci1[1];
var yas2 = sonuc - ogrenci2[1];
var yas3 = sonuc - ogrenci3[1];

var sonuc1 = `Yiğit Bilgi ${yas1} yaşında`;
var sonuc2 = `Ada Bilgi ${yas2} yaşında`;
var sonuc3 = `Ahmet Turan ${yas3} yaşında`;


console.log(sonuc);

console.log(sonuc1);
console.log(sonuc2);
console.log(sonuc3);