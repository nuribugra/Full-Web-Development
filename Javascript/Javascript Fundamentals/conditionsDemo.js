// Bir sayı 10 ve 50 arasında mı?

// var num1 = 5;;
// if ((num1 > 10) && (num1 < 50)){
//     console.log("Sayı 10 ile 50 arasındadır.");
// }else {
//     console.log("Sayı 10 ile 50 arasında değildir.");
// }

// Bir sayınınn pozitif tek sayı olup olmadığını bul

// var x = 0;
// if (x > 0){
//     if (x % 2 == 0){
//         console.log("Sayı pozitiftir. Ancak tek değildir.");
//     }else {
//         console.log("Sayı pozitif ve tektir.");
//     }
// }else {
//     console.log("Sayı pozitif değildir.");
// }

// x, y, z sayılarının büyüklüklerini karşılaştır.

// var x = 4;
// var y = 4;
// var z = 4;

// if (x > y && x > z) {
//     if (y > z){
//         console.log(x + " > " + y + " > " + z);
//     }else{
//         console.log(x + " > " + z + " > " + y);
//     }
// }else if(y > x && y > z) {
//     if (x > z){
//         console.log(y + " > " + x + " > " + z);
//     }else{
//         console.log(y + " > " + z + " > " + x);
//     }
// }else if(z > x && z > y) {
//     if (x > y){
//         console.log(z + " > " + x + " > " + y);
//     }else{
//         console.log(z + " > " + y + " > " + x);
//     }
// }else (
//     console.log(x + " = " + y + " = " + z);
// )

// 2 vize (%40) ve 1 final (%60) notuna göre ortalama hesaplama
// 50+ geçti
// ort 50 olursa geçmek için final notu en az 50 olmalı
// final 70 ise ortalama 50 altındaysa bile geçsin.

var vize1 = 10;
var vize2 = 10;
var final = 60;
var ortalama = ((vize1 + vize2)) / 2 * 0.4 + final * 0.6;

console.log("Ortalama : " + ortalama);

if (ortalama >= 50) {
    if(final < 50) {
        console.log("kaldın.");
    }
    console.log("geçtin.");
}else if (final >= 70) {
    console.log("geçtin.");
}else {
    console.log("kaldın.");
}
