const theGarage = require("../commands/group1/garage.js");

// Test 1

it("garage - create", function ()
{
    theGarage._doCmd("create Ford Focus SW08TNO Cracked_Windscreen Missing_Exhaust");

    if(theGarage._carlist.length !== 1)
    {
        throw new Error("The car list should contain 1 car.");
    }

});

// Test 2

it("garage - check in", function ()
{
    theGarage._doCmd("check in SW08TNO");

    if(theGarage._garage.length !== 1)
    {
        console.log(theGarage._garage.length);
        throw new Error("The garage should contain 1 car.");
    }

});

// Test 3

it("garage - output", function ()
{
    var getOutput = theGarage._doCmd("output")

    if(getOutput !== "\n- - - - -\nCAR 1\n- - - - -\nManufacturer: Ford\nModel: Focus\nRegistration: SW08TNO\nFaults:\n- Cracked_Windscreen\n- Missing_Exhaust\n\n")
    {
        throw new Error("Output should be:" + getOutput + "Your output is:" + "\n- - - - -\nCAR 1\n- - - - -\nManufacturer: Ford\nModel: Focus\nRegistration: SW08TNO\nFaults:\n- Cracked_Windscreen\n- Missing_Exhaust\n\n");
    }
});


//Test 4

it("garage - check out", function ()
{
    theGarage._doCmd("check out SW08TNO")

    if(theGarage._garage.length !== 0)
    {
        throw new Error("The garage should contain 0 cars.");
    }

});
