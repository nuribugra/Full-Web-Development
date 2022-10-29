let numbers = [1,5,7,15,3,25,12,24];

// Her bir elemanın karesini yazdır

// let total = 0;

// for (let number of numbers) { 
//     console.log(number**2);
//}
// of kullanımı index numarasını değil elemanın kendisini verir. Ancak in kullanımı index numarasını verir.

// Hangi sayılar 5'in katıdır ?

// for (let i of numbers) {
//     if (i%5 == 0){
//         console.log(`${i} sayısı beşin katıdır.`)
//     }
// }

// Listedeki çift sayıların toplamınu bulunuz.

// let total = 0;
// for (let i in numbers) {
//     if(numbers[i] % 2 == 0){
//         total += numbers[i];
//     }
// }
// console.log(total);


let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// Listedeki tüm ürünleri büyük harfle yazdır.

// for (let product of products) {
//     console.log(product.toUpperCase());
// }

// Listede isminde samsung olan kaç ürün var ?

// let count = 0;
// for(let product of products){
//     if(product.includes("samsung")){
//         count ++;
//     }
// }
// console.log(count);

let students = [
    {"name":"yiğit","lastName":"bilgi","scores":[60,20,60]},
    {"name":"ada","lastName":"bilgi","scores":[80,70,80]},
    {"name":"çınar","lastName":"turan","scores":[70,70,60]},
    {"name":"Şakir","lastName":"Karaeski","scores":[75,50,60]},
    {"name":"Selçuk","lastName":"Ata","scores":[90,85,100]}
];

// Listedeki her öğrencinin not ortalaması ve başarı durumunu yazdır.
// Tüm öğrencilerin not ortalamasını da bulsun.

