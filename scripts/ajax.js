$(document).ready(function () {

    $("#btnSearchBooks").click(function ()
    {
        var searchBoxText = $("#txtSearchBoxBooks").val(); 
        $.ajax({
            url: "data/books.json",
            method: "GET",
            success: function (data) //what did jon say about the data param here???
			{
                var tableBody = $("#tblBooks"); //find the table
				tableBody.empty(); //empty the table for refilling. 

				//make the headers because they were cleared. 
                var tableHeaderRow = $("<tr>");
                tableHeaderRow.append($("<th>").text("Title"));
                tableHeaderRow.append($("<th>").text("ISBN"));
                tableHeaderRow.append($("<th>").text("Author"));
                tableHeaderRow.append($("<th>").text("Tags"));
                tableBody.append(tableHeaderRow);


				var text = $("#txtSearchBoxBooks").val().toLowerCase()

				//add count variable for css stuff later
				$.each(data, function (ndx, obj) //I need to understand whats going on here...
				{
					var tr = $("<tr>");
					var ul = $("<ul>");

                    var text = $("#txtSearchBoxBooks").val().toLowerCase();
					var textForSearch = (obj.Title + " " + obj.ISBN + " " + obj.Author.fname + " " + obj.Author.mname + " " + obj.Author.lname).toLowerCase();
					for (var i = 0; i < obj.Tags.length; i++)
					{
						textForSearch += " " + obj.Tags[i].toLowerCase() + " ";
                    }

					textForSearch.toLowerCase(); 
					var matches = textForSearch.indexOf(text);


					if (text != "" && text != " " && matches != -1)
					{
						var tr = $("<tr>");

						tr.append($("<td>").text(obj.Title))
						tr.append($("<td>").text(obj.ISBN))
						if (obj.Author.mname != "")
						{
							tr.append($("<td>").text(obj.Author.fname + " " + obj.Author.mname + " " + obj.Author.lname));
						}
						else
						{
							tr.append($("<td>").text(obj.Author.fname + " " + obj.Author.lname));
						}

						for (var i = 0; i < obj.Tags.length; i++)
						{

							var li = $("<li>").text(obj.Tags[i]);
							ul.append(li)
						}
						tr.append($("<td>").append(ul));
						tableBody.append(tr);
					}


                });

				if (text == "" || text == " ")
				{
					returnTable();
				}

            },
            error: function (obj, mess, messObj)
            {
                alert("Failed to get data.");
            }
        });
    });


    function returnTable()
    {
		var tableBody = $("#tblBooks"); //find the table
        $.ajax({
            url: "data/books.json",
            method: "GET",
            success: function (data) //what did jon say about the data param here???
            {


				$.each(data, function (ndx, obj) 
				{
					var ul = $("<ul>");
					var tr = $("<tr>");

					tr.append($("<td>").text(obj.Title))
					tr.append($("<td>").text(obj.ISBN))
					if (obj.Author.mname != "")
					{
						tr.append($("<td>").text(obj.Author.fname + " " + obj.Author.mname + " " + obj.Author.lname));
					}
					else
					{
						tr.append($("<td>").text(obj.Author.fname + " " + obj.Author.lname));
					}

					for (var i = 0; i < obj.Tags.length; i++)
					{

						var li = $("<li>").text(obj.Tags[i]);
						ul.append(li)
					}
					tr.append($("<td>").append(ul));
					tableBody.append(tr);

				});
            },
            error: function (obj, mess, messObj)
            {
                alert("Failed to get data.");
            }
        });
	};





	//https://stackoverflow.com/questions/11189136/fire-oninput-event-with-jquery


	$("#txtSearchBoxPeople").on('input',function ()
	{
		var ul = $("#matchingPeople"); 
		$.ajax({
			url: "data/people.json",
			success: function (data)
			{
				ul.empty(); 
				$.each(data, function (ndx, obj)
				{
					var text = $("#txtSearchBoxPeople").val().toLowerCase();
					var textForDisplay = (obj.name + " " + obj.age + " " + " " + obj.phone + " Group: " + obj.group);
					var textForSearching = textForDisplay.toLowerCase();
					var matches = textForSearching.indexOf(text);

					if (matches != -1)
					{
                        var li = $("<li>").append(textForDisplay);

                        if (obj.group === 1)
                        {
                            li.addClass("group1")
                        }
                        else if(obj.group === 2)
                        {
                            li.addClass("group2")

                        }
                        else if(obj.group === 3) //added this because a weird line was appearing in the formatting otherwise i would have used else. 
                        {
                            li.addClass("group3")

                        }

						ul.append(li);
					}

					if (text === "" || text === " ")
					{
						ul.empty();
					}
				}); 
				if (text === "" || text === " " || matches === -1)
				{
					ul.empty();
				}
			},
			failure: function ()
			{
				alert("failure");
			}

		});
	});

});