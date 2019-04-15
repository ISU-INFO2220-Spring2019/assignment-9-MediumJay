$(document).ready(function ()
{
    var isChangingPerson = false;
    var personToChange;
    var indexToSaveTo;


    var people = [];
    var peopleFromStorage = [];
    if (JSON.parse(localStorage.getItem("people")))
    {
        peopleFromStorage = JSON.parse(localStorage.getItem("people"));
        people = peopleFromStorage;
    }

    var usernameFromStorage = localStorage.getItem("username");
    if (usernameFromStorage !== undefined && usernameFromStorage !== null)
    {
        $("#username").val(usernameFromStorage);
    }

    $("#login").click(function ()
    {
        var usernameEntered = $("#username").val();
        var passwordEntered = $("#password").val(); //value or text for inputs???

        if (usernameEntered === "weaver" && passwordEntered === "tester")
        {
            var checkBox = document.getElementById("rememberMe"); // is returning null...
            if (checkBox !== null && checkBox.checked === true)
            {
                localStorage.setItem("username", usernameEntered);
            }
            alert("You have successfully logged in.");
        }
        else
        {
            alert("Login process failed. Please try again.");
        }

        //also reload page, i learned this while working at my internship. 
        location.reload();
    });



    $("#forgetMe").click(function ()
    {
        localStorage.removeItem("username");  //remove only the one not the entire storage. 
        alert("You have been forgotten!");
        location.reload(); //I figure for showing that the user has actually been forgotten the
        //page should reload to show their username isnt there anymore. 
    });
    //End of easy



    $("#addPerson").click(function addperson(e)
    {
        //create object using values in the form. 
        if (isChangingPerson == false)
        {

            e = e || window.event;
            var nameEntered = $("#nameEntry").val();
            var phoneNumber = $("#phoneEntry").val();
            var age = $("#age").val();
            var groups = document.getElementsByName("group");
            var selectedGroup;

            for (var i = 0; i < groups.length; i++)
            {
                if (groups[i].checked)
                {
                    selectedGroup = groups[i].attributes.value.nodeValue; //selected group is being treated as a different variable..
                }

            }

            if (nameEntered !== "" && phoneNumber !== "" && age > 0 && age !== "" && selectedGroup > 0 && selectedGroup < 4)
            {
                var person = { "name": nameEntered, "phone": phoneNumber, "age": age, "group": selectedGroup }; //get intellisense working 
                people.push(person); //apparently this is saying push is not a function. 

                localStorage.setItem("people", JSON.stringify(people));
            }
            else
            {
                alert("Error");
            }

            displayPeople();
            //add the person to the unordered list on the page
            //should cancel reload on this button click
            e.preventDefault(); //migrate back to form element structure 
            return false;
        }
        else
        {


            e = e || window.event;
            var nameEntered = $("#nameEntry").val();
            var phoneNumber = $("#phoneEntry").val();
            var age = $("#age").val();
            var groups = document.getElementsByName("group");
            var selectedGroup;

            for (var i = 0; i < groups.length; i++)
            {
                if (groups[i].checked)
                {
                    selectedGroup = groups[i].attributes.value.nodeValue; //selected group is being treated as a different variable..
                }

            }

            if (nameEntered !== "" && phoneNumber !== "" && age > 0 && age !== "" && selectedGroup > 0 && selectedGroup < 4)
            {
                var person = { "name": nameEntered, "phone": phoneNumber, "age": age, "group": selectedGroup }; //get intellisense working 
                people[indexToSaveTo] = person; //apparently this is saying push is not a function. 

                localStorage.setItem("people", JSON.stringify(people));
            }
            else
            {
                alert("Error");
            }

            displayPeople();
            //add the person to the unordered list on the page
            //should cancel reload on this button click
            $("#addPerson").text("Add Person");

            $("#nameEntry").val("");
            $("#phoneEntry").val("");
            $("#age").val("");

            var groups = document.getElementsByName("group");

            for (var i = 0; i < groups.length; i++)
            {
                groups[i].checked = false; 
            }

            isChangingPerson = false; 
            e.preventDefault(); //migrate back to form element structure 
            return false;


        }
    });


    $("#clearStorage").click(function ()
    {
        localStorage.removeItem("people"); 
        alert("Storage Cleared.");
    });

    function displayPeople()
    {
        var peopleDisplay = $("#peopleForDisplay");
        var buttonIdentifier = 0;
        peopleDisplay.empty();
        for (var i = 0; i < people.length; i++)
        {
            var editButton = $("<button>").text("Edit");
            var li = $("<li>").text(people[i].name + " " + people[i].phone + " Age: " + people[i].age + " Group: " + people[i].group);

            if (people[i].group == 1)
            {
                li.addClass("group1");
            }
            else if (people[i].group == 2)
            {
                li.addClass("group2");
            }
            else if (people[i].group == 3)
            {
                li.addClass("group3");
            }
            editButton.addClass("index" + buttonIdentifier);
            buttonIdentifier++;

            li.append(editButton);
            peopleDisplay.append(li);
        }
    }



        displayPeople(); 
        //end of medium



    $("#peopleForDisplay").click(function (e)
    {
        e = e || window.event; 

        var buttonThatWasClicked = e.target || event.srcElement; 
        var classOfButton = buttonThatWasClicked.className; 
 

        for (var i = 0; i < people.length; i++)
        {
            if (classOfButton.indexOf(i) != -1)
            {
                personToChange = people[i];
                indexToSaveTo = i; 
            }
        }

        $("#nameEntry").val(personToChange.name);
        $("#phoneEntry").val(personToChange.phone);
        $("#age").val(personToChange.age);

        var groups = document.getElementsByName("group");
        if (personToChange.group == 1)
        {
            groups[0].checked = true; 
        }
        else if (personToChange.group == 2)
        {
            groups[1].checked = true; 
        }
        else if (personToChange.group == 3)
        {
            groups[2].checked = true; 
        }

        isChangingPerson = true;
        $("#addPerson").text("Save Changes"); 
    }); 


}); 