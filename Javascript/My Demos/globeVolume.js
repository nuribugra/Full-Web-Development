function calculateGlobeVolume (r, pi) {
    let volume;
    if(r>0 && (pi == 3 || pi == 3.14)){
        volume = (4/3)*pi*(r**3);
        console.log(`Your globe's volume is ${volume.toFixed(2)}`);
    }else {
        console.log("Your values are invalid. Please check your values.");
    }
}

calculateGlobeVolume(5, 3.14);