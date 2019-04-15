/*
Jason Burnett
January 16, 2019
INFO 2220
Jon Holmes
Assignment 6
Purpose: This is my javascript page for events
*/

function moveMouse(e)
{
    e = e || window.event; 

    var coords = document.getElementById("mouseCoords");
    coords.innerText = "x: " + e.x + " y: " + e.y;  

}

function mousePressed(e)
{
    e = e || window.event;
    var trgt = e.target || e.srcElement; 

    if (trgt.getAttribute("id") !== "secMouser")
    {
        trgt.className = "pressed"; 
    }
}

function resetClass(e)
{
    e = e || window.event;
    var trgt = e.target || e.srcElement; 

    if (trgt.className !== "")
    {
        trgt.className = "";
    }
}

function mouseHeadOver(e)
{
    e = e || window.event;
    var trgt = e.target || e.srcElement; 

    if (trgt.tagName === "H1")
    {
        trgt.className = "overHead";
    }

}

//this loads in all the events to the page
window.onload = loadEvents;

function loadEvents()
{
    var section = document.getElementById("secMouser")
    section.onmousemove = moveMouse;
    section.onmousedown = mousePressed; 
    section.onmouseup = resetClass;

    var header = document.getElementById("secMouser").getElementsByTagName("h1")[0];
    header.onmouseover = mouseHeadOver;
    header.onmouseout = resetClass; 

    var button = document.getElementById("btnSayHello");
    button.addEventListener("click", function () { alert("Hello!") });
    button.addEventListener("mousemove", function (e)
    {
        e = e || window.event; 
        e.cancelBubble = true;
        e.stopPropagation(); 

        var mouseCoords = document.getElementById("mouseCoords");
        mouseCoords.innerText = "On the button!";
    });

    
}