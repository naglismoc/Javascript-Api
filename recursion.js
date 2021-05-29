// rekursija(5);
// console.log("aha");

// function rekursija(counter) {
//     if (counter > 0) {
//         rekursija(counter - 1);
//     }
//     console.log(counter);
// }
fibonacci(0, 1, 700);

function fibonacci(first, second, end) { //
    let third = first + second; //
    if (third < end) { //
        console.log(third); //
        fibonacci(second, third, end);
    }
}