// function greeting() {
//     console.log("Hello !");
// }

// greeting();

// function greeting(msg) {
//     console.log(msg);
// }

// greeting("Selam");
// greeting("Merhaba");
// greeting();

function calculateAge(birthYear) {
    let now = new Date().getFullYear();
    let age = now - birthYear;
    console.log(`${age} yaşındasınız.`);
}

calculateAge(2003);
calculateAge(2002);