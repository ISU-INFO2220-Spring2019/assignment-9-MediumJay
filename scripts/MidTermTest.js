var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var done = true;
var textOut;
var tip = 79;
window.onload = windowLoad;
function windowLoad()
{
    var btnOne = document.getElementById("btnOne");
    var btnTwo = document.getElementById("btnTwo");
    var btnThree = document.getElementById("btnThree");
    var btnFour = document.getElementById("btnFour");
    var btnFive = document.getElementById("btnFive");
    var btnSix = document.getElementById("btnSix");
    var btnSeven = document.getElementById("btnSeven");
    var btnEight = document.getElementById("btnEight");
    var btnNine = document.getElementById("btnnine");
    document.getElementById("btnTen").addEventListener("click", btnTen_Click);
    btnOne.onclick = btnOne_Click;
    btnTwo.onclick = function ()
    {
        btnOne_Click(35);
    }
    btnThree.onclick = btn3_Click;

    var divFour = document.getElementById("divFour");
    setDivEvents(divFour);
    btnFour.addEventListener("click", btnFour_Click);
    btnFive.onclick = btnFive_Click;
    btnFive.onclick = btnFiveA_Click;
    btnSix.addEventListener("click", btnSix_Click);
    btnSix.addEventListener("click", btnSixA_Click);
    btnSeven.addEventListener("click", btnSeven_Click);
    btnEight.addEventListener("click", btnEight_Click);
    btnNine.addEventListener("click", btnNine_Click);

}
function btnOne_Click()
{
    function ObjH()
    {
        this.a = 56;
        this.b = 76;
        this.c = addValues;

        function addValues()
        {
            return this.a + this.b;
        }
    }

    var objH = new ObjH();
    alert(objH.c);

    var str = "";
    var x = 2.0;
    if (x == 2) { str += "1 passed\n"; };
    if ("3" * x == 6) { str += "2 passed\n"; };
    if ("2" * 3 == x * 9 / 3) { str += "3 passed\n"; };
    if (typeof x == 'number') { str += "4 passed\n"; };
    if (typeof (x) == "number") { str += "5 passed\n"; };
    if (x = 6) { str += "6 passed\n"; };
    alert(str + x);
}

function btn3_Click(e)
{
    var div = document.getElementById("divThree");
    var itms1 = div.getElementsByTagName("li");
    var itms2 = document.getElementsByTagName("li");
    var outPut = "";
    if (itms1.length == itms2.length)
    {
        for (var i = 0; i < itms1.length; i++)
            outPut += itms1[i].innerText;
    } else
    {
        for (var i = 0; i < itms2.length; i++)
            outPut += itms2[i].innerText;
    }
    alert(outPut);
}

function setDivEvents(div)
{
    div.onclick = function ()
    {
        textOut += " Apple";
        alert(textOut);
    }
    var divInner = div.getElementsByTagName("div");
    divInner[0].onclick = function ()
    {
        textOut += " Bananna";
    }
    var para = div.getElementsByTagName("p");
    para[0].onclick = function ()
    {
        textOut += " Cherry";
    }
    var spns = div.getElementsByTagName("span");
    spns[0].onclick = function ()
    {
        textOut += this.innerText;
    }
    var its = div.getElementsByTagName("i");
    its[0].onclick = function (e)
    {
        e = e || window.event;
        e.stopPropagation();
        textOut += this.innerText;
    }
}

function btnFour_Click()
{
    tip = 56;
    alert(tip + tip);
}

function btnFive_Click()
{
    arr = [];
    for (var j = 1; j < 33; j += 3)
    {
        arr.push(j);
    }
    alert(arr);
}

function btnFiveA_Click() { alert(arr); }
function btnSix_Click() { alert("Hello"); }
function btnSixA_Click() { alert("Goodbye"); }
function btnSeven_Click() { alert(funOne(1, "bat", "more")); }
function btnEight_Click() { alert(funTwo(30)); }
function btnNine_Click() { alert("Open" + "\n" + "Sesame!"); }
function btnTen_Click()
{
    alert(funOne("Little", " One", 2, 3, 5));
}

function funOne() { return arguments[0] + arguments[3]; }
function funTwo(a) { return a + 2; }
function funTwo(a, b) { return a + 4; }