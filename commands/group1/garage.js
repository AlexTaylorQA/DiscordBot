var garage = new Array();
var allCars = new Array();
function doCmd(inText)
{
	var trimText = inText.trim();
	var splitCmd = trimText.split(" ");
	var theStr = "";

	switch(splitCmd[0].toLowerCase())
	{
		case "create":
			theStr = createCar(splitCmd);
			break;
		
		case "check":
			switch(splitCmd[1].toLowerCase())
			{
				case "in":
					theStr = checkIn(splitCmd);	
					break;
				
				case "out":
					theStr = checkOut(splitCmd);
					break;
					
				default:
					theStr = "\nInvalid command. Please try:\n\n!bot garage [command]\n\nCommands:\n\n- Create [manufacturer] [model] [registration] [fault 1] [fault 2] ...\n- Output\n- Check In [registration]\n- Check Out [registration]\n\nNOTE: commands are not case-sensitive. Registration is, however.";
					break;
			}
			break;
		
		case "output":
			theStr = showAll();
			break;
			
		default:
			theStr = "\nInvalid command. Please try:\n\n!bot garage [command]\n\nCommands:\n\n- Create [manufacturer] [model] [registration] [fault 1] [fault 2] ...\n- Output\n- Check In [registration]\n- Check Out [registration]\n\nNOTE: commands are not case-sensitive. Registration is, however.";
			break;
		
	}
	return theStr;
}
function createCar(splitCmd)
{
	var str = "";
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
		for(i = 4; i < splitCmd.length; i++)
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
	
	str = "\nNew car created.";
	return str;
}
function checkIn(splitCmd)
{
	var str = "";
	var checkReg = splitCmd[2];
	
	for(i = 0; i < allCars.length; i++)
	{
		if(allCars[i][2] == checkReg)
		{
			garage.push(allCars[i]);
		}
	}
	str = ("\nCar " + checkReg + " checked in.");
	return str;
}
function checkOut(splitCmd)
{
	var str = "";
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
	str = ("\nCar " + checkReg + " checked out.");
	return str;
}
function showAll()
{
	var str = "\n";
	
	for(i = 0; i < garage.length; i++)
	{
		var faultStr = "";
		for(j = 0; j < garage[i][3].length; j++)
		{
			faultStr += ("\n- " + garage[i][3][j]);
		}
		str += ("- - - - -\nCAR " + (i + 1) 
			+ "\n- - - - -"
			+ "\nManufacturer: " + garage[i][0]
			+ "\nModel: " + garage[i][1]
			+ "\nRegistration: " + garage[i][2]
			+ "\nFaults:" 
			+ faultStr
			+ "\n\n"
		);
	}
	return str;
}

module.exports = 
{
	_garage: garage,
	_carlist: allCars,
	_doCmd: doCmd
	
};
