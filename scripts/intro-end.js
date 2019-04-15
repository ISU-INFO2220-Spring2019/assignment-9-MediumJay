/*Jason Burnett
January 31, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This page will help teach me to use JavaScript and hold my Javascript code. */
var greeting = prompt("Script prompt:");
if (greeting === null || greeting === "") {
    alert("You left the prompt blank!");
} else {
    alert(greeting +", "+ giveMyName());
}
