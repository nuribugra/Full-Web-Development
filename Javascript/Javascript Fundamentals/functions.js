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
    return new Date().getFullYear() - birthYear;
}

console.log(calculateAge(2000));

function calculateRetirement(birthYear) {
    let age = calculateAge(birthYear);
    let remainingYear = 65 - age;
    if (remainingYear > 0) {
        console.log(`Emekli olmanıza ${remainingYear} yıl kaldı.`);
    }else {
        console.log("Emekli oldunuz.");
    }
}

calculateRetirement(2002);
