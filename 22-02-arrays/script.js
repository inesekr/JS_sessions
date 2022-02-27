let numberOfFizzBuzz = parseInt(prompt("Enter the number of Fizz-Buzzes"));

let i = 1;
let fizzBuzz = 0;

do {
    if (i % 3 == 0 && i % 5 == 0) {
        fizzBuzz++;
        console.log(i);
        i++;
    }
    else { i++ };
} while (fizzBuzz < numberOfFizzBuzz);