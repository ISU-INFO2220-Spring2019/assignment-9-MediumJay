/*
Jason Burnett
January 16, 2019
INFO 2220
Jon Holmes
Assignment 5
Purpose: This is will help me learn how to utilize dom
*/

var arrayOne = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var arrayTwo = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble","Rubble"]; 
var arrayThree = [36, 34, 7, 34, 32, 8]; 

function showInnerText()
{
    var pNode = document.getElementById("pOne");
    var text = pNode.innerText;
    alert(text);
}

function showInnerHTML()
{
    var pNode = document.getElementById("pOne");
    var htmlStuff = pNode.innerHTML;
    alert(htmlStuff);
}

function numberList()
{
    var liNode = document.getElementsByTagName("li");
    for (var i = 0; i < liNode.length; i++)
    {
        var number = i + 1; 
        liNode[i].innerText += " " + number;
    }
}

function markRows()
{
    var tableRows = document.getElementById("tblMarkRows").getElementsByTagName("tr");

    for (var i = 0; i < tableRows.length; i++)
    {
        if (i % 2 === 0)
        {
            tableRows[i].setAttribute("class","other");
        }
    }
}

function addRows()
{
    var table = document.getElementById("tblAddRows");

    for (var i = 0; i < arrayOne.length; i++)
    {
        var child1 = document.createTextNode(arrayOne[i]);
        var child2 = document.createTextNode(arrayTwo[i]);
        var child3 = document.createTextNode(arrayThree[i]);

        //I had to move the appendChild to a seperate line becuase newTdForOne-three were
        //being registered as text elements, not td elements. Why is that?
        var newTdForOne = document.createElement("td");
        newTdForOne.appendChild(child1);
        var newTdForTwo = document.createElement("td");
        newTdForTwo.appendChild(child2);
        var newTdForThree = document.createElement("td");
        newTdForThree.appendChild(child3); 

        var nextTableRow = document.createElement("tr");

        nextTableRow.appendChild(newTdForOne);
        nextTableRow.appendChild(newTdForTwo);
        nextTableRow.appendChild(newTdForThree);

        if (i % 2 === 0)
        {
            nextTableRow.setAttribute("class", "other");
        }

        table.appendChild(nextTableRow);
    }
}

function addSuccess()
{
    var divElementNode = document.createElement("div");
    divElementNode.className = "success";
    divElementNode.innerText = "This is a Success Message";
    document.getElementById("divMessages").appendChild(divElementNode);
}

function addWarning()
{
    var divElementNode = document.createElement("div");
    divElementNode.className = "warning";
    divElementNode.innerText = "This is a Warning Message";
    document.getElementById("divMessages").appendChild(divElementNode);
}

function addError()
{
    var divElementNode = document.createElement("div");
    divElementNode.className = "error";
    divElementNode.innerText = "This is an Error Message";
    document.getElementById("divMessages").appendChild(divElementNode);
}

