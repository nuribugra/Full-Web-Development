let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10.6");
sonuc = parseInt("10.6");
sonuc = parseFloat("10");
sonuc = parseInt("10a");
sonuc = parseInt("a10");
sonuc = isNaN("10a");
sonuc = isNaN("10");

let sayi = 18.76431;
sonuc = sayi.toPrecision(3); //Sayının kaç basamağının gösterileceğini belirler
sonuc = sayi.toFixed(2); // Sayınınn ondalıklı bölümünün kaç basamağının gösterileceğini belirler

sonuc = Math.round(2.4);
sonuc = Math.round(2.5);
sonuc = Math.ceil(2.2); // Daima yukarıya yuvarlar
sonuc = Math.floor(2.9); // Daima aşağıya yuvarlar
sonuc = Math.sqrt(36); // Karekök alma
sonuc = Math.pow(2,4); // Üs alma (2 üssü 4 = 16)
sonuc = Math.abs(-8); // Mutlak değer
sonuc = Math.min(2,5,8,3,4); // Verilen sayıların en küçüğünü bulur
sonuc = Math.max(2,5,8,3,4); // Verilen sayıların en büyüğünü bulur
sonuc = Math.floor(Math.random()*1000); // Rastgele sayı üretir

console.log(typeof sonuc);
console.log( sonuc);