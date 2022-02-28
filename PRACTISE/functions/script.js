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
    var len = myString.length;
    for (var i = 0; i < len / 2; i++) {
        if (myString[i] === myString[len - 1 - i]) {
            console.log(`Your text "${myString}" is palindrome`) //prints to console each time when a match is found...
        }
        else {
            console.log(`Your text "${myString}" is NOT palindrome`)
        }
    }
}

palindrome(myString);

// anagram(myString);??

function anagram(myString, words) {
    var re = /[^A-Za-z0-9]/g;
    myString = myString.toLowerCase().replace(re, '');
    var a = myString.split('').sort().join('');
    var b = words.join('').split('').sort().join('');
    return a == b;
}
anagram(myString);


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