var garage = new Array();
var allCars = new Array();
function doCmd(inText)
{
	var trimText = inText.trim();
	var splitCmd = trimText.split(" ");
		
	switch(splitCmd[0].toLowerCase())
	{
		case "create":
		createCar(splitCmd);
			break;
		
		case "check":
			switch(splitCmd[1].toLowerCase())
			{
				case "in":
					checkIn(splitCmd);	
					break;
				
				case "out":
					checkOut(splitCmd);
					break;
					
				default:
					alert("Invalid command. Please try:\n- Create [manufacturer] [model] [registration] \n  [fault 1] [fault 2] ...\n- Output\n- Check In [registration]\n- Check Out [registration]\n\nNOTE: commands are not case-sensitive.");
					break;
			}
			break;
		
		case "output":
			showAll();
			break;
			
		default:
			alert("Invalid command. Please try:\n- Create [manufacturer] [model] [registration] \n  [fault 1] [fault 2] ...\n- Output\n- Check In [registration]\n- Check Out [registration]\n\nNOTE: commands are not case-sensitive.");
			break;
		
	}
}
function createCar(splitCmd)
{
	var newCar = new Array();
	var faults = new Array();
	
	var theMan = splitCmd[1];
	var theMod = splitCmd[2];
	var theReg = splitCmd[3];
		
	newCar.push(theMan);
	newCar.push(theMod);
	newCar.push(theReg);
	
	if (splitCmd.length > 4)
	{
		for(i = 5; i < splitCmd.length; i++)
		{
			faults.push(splitCmd[i]);
		}
		newCar.push(faults);
	}
	else
	{
		faults.push("No Faults");
		newCar.push(faults);
	}
	
	allCars.push(newCar);
	
	document.getElementById("cmd").value = "";
	
	alert("New car created.");
}
function checkIn(splitCmd)
{
	var checkReg = splitCmd[2];
	
	for(i = 0; i < allCars.length; i++)
	{
		if(allCars[i][2] == checkReg)
		{
			garage.push(allCars[i]);
		}
	}
	alert("Car " + checkReg + " checked in.")
	
}
function checkOut(splitCmd)
{
	var checkReg = splitCmd[2];
	
	var endloop = garage.length;
	
	for(i = 0; i < garage.length; i++)
	{
		if(garage[i][2] == checkReg)
		{
			garage.splice(i, 1);
			i = endloop;
		}
	}
	alert("Car " + checkReg + " checked out.")
}
function showAll()
{
	var str = "<br>";
	
	for(i = 0; i < garage.length; i++)
	{
		var faultStr = "";
		for(j = 0; j < garage[i][3].length; j++)
		{
			faultStr += ("<br>- " + garage[i][3][j]);
		}
		str += ("- - - - -<br>CAR " + (i + 1) 
			+ "<br>- - - - -"
			+ "<br>Manufacturer: " + garage[i][0]
			+ "<br>Model: " + garage[i][1]
			+ "<br>Registration: " + garage[i][2]
			+ "<br>Faults:" 
			+ faultStr
			+ "<br><br>"
		);
	}
	
	document.getElementById("theOutput").innerHTML = str;
}
