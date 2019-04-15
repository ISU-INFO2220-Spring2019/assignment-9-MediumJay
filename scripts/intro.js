/*Jason Burnett
January 31, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This page will help teach me to use JavaScript and hold my Javascript code. */
alert("The Script in the header has run.");
var loadLast = "I really am last."

var arrayForUse;
if (arrayForUse === undefined) {
    arrayForUse = [];
    alert("The array was undefined");
}

arrayForUse.push(34);
arrayForUse.push(5.5);
arrayForUse.push(33.5);
arrayForUse.push(46.5);
arrayForUse.push(59);
arrayForUse.push(64);
arrayForUse.push(43);
arrayForUse.push(64);
arrayForUse.push(48);
arrayForUse.push(49);
arrayForUse.push(40);
arrayForUse.push(59);
arrayForUse.push(44);
arrayForUse.push(54);
arrayForUse.push(19.5);
arrayForUse.push(25);
arrayForUse.push(69);
arrayForUse.push(23);

var addedNumbers = 0; 
for (var i = 0; i < arrayForUse.length; i++) {
    addedNumbers += arrayForUse[i];
}

var average = addedNumbers / arrayForUse.length; 
alert(average);

function giveMyName() {
    return "Jason Burnett"
}

alert(giveMyName());