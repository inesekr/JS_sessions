var inputText = window.prompt("Please put in some text here!");
var myString = inputText.toString();

// function palindrome(myString) {
//     // Lowercase the string and use the RegExp to remove unwanted characters from it
//     var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

//     var lowRegStr = myString.toLowerCase().replace(re, '');

//     var reverseStr = lowRegStr.split('').reverse().join('');


//     // Check if reverseStr is strictly equals to lowRegStr 

//     if (reverseStr === lowRegStr) {
//         console.log(`Your text "${myString}" is a palindrome`)
//     } else {
//         console.log(`Your text "${myString}" is NOT a palindrome`)
//     }
// }


function palindrome(myString) {
    var re = /[^A-Za-z0-9]/g;
    myString = myString.toLowerCase().replace(re, '');
    // var len = myString.length;

    var myArray = Array.from(myString);
    console.log(myArray);
    var len = myArray.length;
    // for (var i = 0; i < len / 2; i++) {
    var isPalindrome = myArray.every(function () {
        for (var i = 0; i < len / 2; i++) {
            myArray[i] === myArray[len - 1 - i]
        }
    })
    if (isPalindrome === true) {
        console.log(`Your text "${myString}" is palindrome`)
    }
    else {
        console.log(`Your text "${myString}" is NOT palindrome`);
    }
}




//     if (isPalindrome === true) {
//         console.log(`Your text "${myString}" is palindrome`)
//     }

//     else { console.log(`Your text "${myString}" is NOT palindrome`); }
// }

// for (var i = 0; i < len / 2; i++) {

// let numbers = [1, 3, 5];
// let result = numbers.every(function (e) {
//     return e > 0;
// });

// var isPalindrome = myString.every(function () {
//     myString[i] === myString[len - 1 - i]
// });
// if (isPalindrome === true) {
//     console.log(`Your text "${myString}" is palindrome`)
// }

// else { console.log(`Your text "${myString}" is NOT palindrome`); }







// if (myString[i] !== myString[len - 1 - i]) {
//     console.log(`Your text "${myString}" is NOT palindrome`);
//     break;
// }
// else {
//     console.log(`Your text "${myString}" is palindrome`)
// } //if put here, it prints to console each time when a match is found...


palindrome(myString);


// myString = myString.toLowerCase().replace(re, '');
// var myArray = Array.from(myString);

// function makeAnagram() {

//     var makeAnagram = myArray[Math.floor(Math.random() * myArray.length)];
//     console.log(`An anagram from your `)
// }
// makeAnagram();


// anagram(myString);??

// function anagram(myString, words) {
//     var re = /[^A-Za-z0-9]/g;
//     myString = myString.toLowerCase().replace(re, '');
//     var a = myString.split('').sort().join('');
//     var b = words.join('').split('').sort().join('');
//     return a == b;
// }
// anagram(myString);


function wordCount(myString) {
    var totalSoFar = 1;
    for (var i = 0; i < myString.length; i++) {
        if (myString[i] !== " ") { // if a certain character in the string is not a space 
            continue;
        }
        else {
            totalSoFar++; // add 1 to total so far

        }
    }
    console.log(`Your string "${myString}" consists of ${totalSoFar} words`);
}

wordCount(myString);
// unfortunately this doesn't solve the case if 2 spaces are used together... :(


function getMaxChar(myString) {
    var max = 0,
        maxChar = '';
    myString.split('').forEach(function (char) {
        if (myString.split(char).length > max) {
            max = myString.split(char).length;
            maxChar = char;
        }
    });
    console.log(`Max occuring character in your string "${myString}" is ${maxChar} and it occurs ${max - 1} times`)
    // return maxChar;
};
getMaxChar(myString);
// if 2 or more characters are of the same count - it takes one (first it finds?)