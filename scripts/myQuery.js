var count = 0; 
$(document).ready(function ()
{

    $("#btnChangeSpan").click(function ()
    {
        $("#spnOne").text("New Text for the Span.");
    });

    $("#btnAppendToSpan").click(function ()
    {
        $("#spnOne").append("==Text at the back"); 
    });

    $("#btnPrependToSpan").click(function ()
    {
        $("#spnOne").prepend("text at the front--");
    });

    $("#btnBeforeSpan").click(function ()
    {
        $("#spnOne").before("Text Before ++"); 
    });

    $("#btnAfterSpan").click(function ()
    {
        $("#spnOne").after("@@ Text After");
    });

   
    $("#btnShowSpan").click(function ()
    {
        alert( $("#spnOne").text() );
    });


    $("#btnNumberPs").click(function ()
    {
        var children = $("#divNumbers").children();
        for (var i = 0; i < children.length; i++)
        {
            children[i].prepend((i + 1) + ". "); 
        }
    })

    $("#btnClassPSuccess").click(function ()
    {
        var children = $("#divClass").children(); 
        //add class success to every paragraph in divClass
        children.addClass("success");
    });


    $("#btnClassPError").click(function ()
    {
        var children = $("#divClass").children();
        //add class error to every paragraph in divClass
        for (var i = 0; i < children.length; i++)
        {
            if (i % 2 == 0)
            {
                children[i].className = "error";
            }
        }
    });
                
    $("#btnClassPWarning").click(function ()
    {
        var children = $("#divClass").children(); 
        //remove all classes and add warning class to every paragraph in divClass

        children.removeClass();
        children.addClass("warning");
        
    });

    $("#btnAddLastNames").click(function ()
    {
        var barney = $(".bff");
        var fred = $(".bff").prev();
        var dino = $(".bff").next(); 

        var strongTag = $("<strong></strong>").text("Flintstone");
        var emTag = $("<em></em>").text(" Rubble");
        var delTag = $("<del></del>").text("the Dinosaur"); 

        fred.append(strongTag);
        barney.append(emTag);
        dino.append(delTag);
    });

    $("#btnRemoveLarry").click(function ()
    {
        var liLarry = $(".first");
        liLarry.remove(); 
    });
    
    $("#btnClearCurly").click(function ()
    {
        var liCurly = $(".second");
        liCurly.contents().remove(); 
    });
    
    $("#btnRemoveMoeLastName").click(function ()
    {
        var liMoeChildren = $(".third").children();
        liMoeChildren[0].remove(); 
    });
    
    $("#btnRemoveShempLastName").click(function ()
    {
        var shemp = $(".third").next().children();
        shemp[0].remove();  // we got problems here; oop, from MOES li go to shemps. 
    });
    
    $("#btnChangeText").click(function ()
    {
        //starting at spnTwo, nav through DOM to span with text Change me and change to I was Changed and set button text to show all p's
        var nextP = $("#spnTwo").parent().next(); 
        var childSpans = nextP.children();
        childSpans[1].innerText = "I was changed";  
    });

    $("#btnTogglePs").click(function ()
    {
        if (count % 2 === 0)
        {
            $("p").hide(1000);
            $("#btnTogglePs").text("Show all P's");
            count++; 
        }
        else
        {
            $("p").show(1000);
            $("#btnTogglePs").text("Hide all P's");
            count++; 
        } 

    });
    
});