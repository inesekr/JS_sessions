// this; //access current window

// let myObject = {
//     myFunction: function(){

//     }
// }

// alert("Here is the alert");
// this.alert("Here is one more alert");

// let answer = this.confirm("Do you want to continue?");
// console.log(answer);

// answer = this.prompt("How are you?", "Good!"); //second parameter as default answer value
// console.log(answer);

// this.open("https://www.google.com");

// let d = new Date();

// this.alert("Today is " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());

// this.alert(`Today is ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`);

// let str = "myString";
// let str2 = str.replace("my", "your");
// console.log(str2);


// let age = parseInt(this.prompt("How old are you?"));
// if (age >= 18) {
//     this.alert("You can get a glass ow wine");
// }
// else {
//     this.alert("Choose a soft drink, please!");
// }
//can go without brackets {}, if thre is only one statement
// can be also only IF statement

// let age = parseInt(this.prompt("How old are you?"));

// if (age < 18)
//     this.alert("you are underage");
// else if (age >= 18 && age < 21)
//     this.alert("you cant buy alcohol in USA");
// else if (age < 21)
//     this.alert("your age is under 21")
// else this.alert("enjoy your drink");

// if (this)
//     this.alert("Nothing"); //always true?

let age = parseInt(this.prompt("How old are you?"));

// if (age < 18)
//     this.alert("you are underage");
// else {
//     if (age >= 18 && age < 21)
//         this.alert("you cant buy alcohol in USA");
//     else
//         this.alert("enjoy your drink");
// }


//De Morgans law:
/// !(cond1 || cond2) same as !cond1 && !cond2
/// !(cond1 && cond2) same as !cond1 || !cond2
if (age < 18)
    this.alert("you are underage");
else {
    if (!(!(age >= 18) || !(age < 21)))
        this.alert("you cant buy alcohol in USA");
    else
        this.alert("enjoy your drink");
}