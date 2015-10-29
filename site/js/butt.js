// Only function of the program :D
function buttonClick()
{
	// Grabs value from text box
	var x = document.getElementById("lol").value;
	var y = "";

	// Special cases (easter eggs)
	switch (x.toLowerCase())
	{
		case "something":
			y = "haha not funny";
			break;
		case "aran":
			y = "Don't you mean God?";
			break;
		case "michael":
			y = "Heil Michael";
			break;
		case "rishi":
			y = "The official fishi"
			break;
		default:
			y=x;
	}

	// Final DOM change
	document.getElementById("lol2").innerHTML = y + " :)";	
}