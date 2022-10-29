var url = "http://google.com.tr"; 
var txt = "Burada bir başlık var diyorum.";

// url kaç karakterli ?

console.log(url.length);

// TXT kaç kelimeden oluşuyor ?

console.log(txt.split(" ").length);

// url http ile mi başlıyor ?

console.log(url.startsWith("http"));

// TXT içerisinde "dost" var mı?

console.log(txt.includes("dost"));

// url ve kurs adı birleştir ve "http://google.com.tr/burada-bir-baslik-var-diyorum" oluştur.

console.log(url + "/" + txt.slice(0,29).replace("ş","s").replace("ı","i").replaceAll(' ' , '-').toLowerCase());