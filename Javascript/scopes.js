var isim = "Burak"; // global scope
const adres = "İstanbul";

adres = "Kocaeli";

function print() {
    let isim = "Elif";
    let cinsiyet = "Kadın";
    console.log(isim);
}

console.log(isim);
// console.log(cinsiyet);
print();

// Fonksiyonlar kendi scope alanlarını oluşturur.
// Block içerisinde yeni bir scope oluşmaz. (let, const)
// Const ile tanımlanan değişkenler değiştirilemez.  