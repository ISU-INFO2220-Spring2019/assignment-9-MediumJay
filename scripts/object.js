/*
Jason Burnett
January 16, 2019
INFO 2220
Jon Holmes
Assignment 4
Purpose: This assignment will help me learn objects and javascript
*/

var personHolder;
var characters; //will hold an array

function Person(fName, lName)
{
    this.firstName = fName;
    this.lastName = lName;
    this.age;
    this.stepsToTake;

    this.sequence = function sequentialSteps()
    {
        var stepOrder = "";
        for (var i = 1; i < this.stepsToTake + 1; i++)
        {
            stepOrder += i + " ";
        }
        return stepOrder;
    };

    this.sum = function sumOddValues()
    {
        var sum = 0;
        for (var i = 0; i < this.age; i++)
        {
            if (i % 2 !== 0) {
                sum += i;
            }
        }
        return sum;
    };
}

//Here is where i got my conversion formulas https://www.almanac.com/content/temperature-conversion
function Converter()
{
    this.celsiusVal = function getCelsiusValue(degreesF)
    {
        return ((degreesF - 32) * (5 / 9)); 
    };

    this.fahrenheitValue = function getFahrenheitValue()
    {
        return ((arguments[0] * (9 / 5)) + 32);
    };
}

function sayHello()
{
    var name = prompt("What is your name?");
    alert("Hello, " + name);
}

function greet(salutation)
{
    name = prompt("What is your name?");
    alert(salutation + ", " + name);
}

function doMaths(num1, num2)
{
    var concatenation = num1 + "" + num2;
    var addition = num1 + num2; 
    var subtraction = num1 - num2; 
    var multiplication = num1 * num2; 
    var division = num1 / num2;
    alert(concatenation + "\r\n" + addition + "\r\n" + subtraction + "\r\n" + multiplication + "\r\n" + division);
}

function createPerson() 
{
    var fName = prompt("What is your first name?");
    var lName = prompt("What is your last name?");
    var age = prompt("What is your age between 1 - 100?");
    Number(age);
    personHolder = new Person(fName, lName);
    if (typeof age === Number && age >= 1 && age <= 100)
    {
        personHolder.age = age;
    }

}

function showSteps()
{
    if (personHolder === undefined)
    {
        alert("Object does not exist. Please click the 'Fill Object' button first");
    }
    else
    {
        personHolder.stepsToTake = 10;
        alert(personHolder.firstName + " took steps \r\n" + personHolder.sequence());
    }
}

function getDegreesInC(fahrenheitValue)
{
    var converterObject = new Converter();
    alert(converterObject.celsiusVal(fahrenheitValue));
}

function getDegreesInF(celciusValue)
{
    var converterObject = new Converter();
    alert(converterObject.fahrenheitValue(celciusValue));
}

function fillCharacterArray()
{
    characters = [];
    var arrayOneFirstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"]; 
    var arrayTwoLastNames = ["Flintstone", "FlintStone", "Flintstone", "Rubble", "Rubble", "Rubble"]; 
    var arrayThreeAges = [36, 34, 7, 34, 32, 8]; 

    for (var i = 0; i < arrayOneFirstNames.length; i++)
    {
        characters[i] = new Person(arrayOneFirstNames[i], arrayTwoLastNames[i]);
        characters[i].age = arrayThreeAges[i];
    }
}


function getCharacterAt(index)
{
    if (characters === undefined)
    {
        alert("Array has not been filled. Please click the 'Fill characters' button.");
    }
    else
    {
        this.message = characters[index].firstName + " your odd age sum is " + characters[index].sum();
        alert(this.message);
    }
}

