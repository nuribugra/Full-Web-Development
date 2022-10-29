var text = "Buraya bir metin yazıyorum şu anda.";

console.log(text);
console.log(text.length);
console.log(text.indexOf("bir"));
console.log(text.lastIndexOf("bir"));
console.log(text.search("bir"));
console.log(text.slice(7,10)); // [indx1 , indx2)
console.log(text.replace("bir","tek"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(7));
console.log(text.charCodeAt(7));
console.log(text.split(' '));
console.log(text.includes("metun"));
console.log(text.startsWith("B"))
console.log(text.endsWith("."))
