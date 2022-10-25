let simdi = new Date(); // şimdiki tarih ve saat bilgisi

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate(); // Ayın kaçındaysan onu söyler
sonuc = simdi.getDay(); // 0: pazar   6:cumartesi
sonuc = simdi.getFullYear();
sonuc = simdi.getHours(); //saat
sonuc = simdi.getTime(); // milisaniye cinsinden saat

// Set Methods
simdi.setFullYear(2028);
simdi.setMonth(9); // 0:Ocak
simdi.setDate(15);

sonuc = simdi;

// Nesne oluşturma
let devrimTarihi = new Date(2023, 10, 6, 00, 00);
sonuc = devrimTarihi;

console.log(sonuc);
console.log(typeof sonuc);