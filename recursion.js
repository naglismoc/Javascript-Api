rekursija(5);
console.log("aha");

function rekursija(counter) {
    if (counter > 0) {
        rekursija(counter - 1);
    }
    console.log(counter);
}