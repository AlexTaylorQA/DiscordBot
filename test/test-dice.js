const theDice = require("../commands/group1/dice.js");

// Test 1

it("dice - random", function ()
{
    var outputDice = theDice._dice();

    var outArr = (outputDice.split(" "));

    if(!(outArr[outArr.length - 1].includes("card.")) && !(outArr[outArr.length - 1].includes("controls.")))
    {
        throw new Error("The dice result was not between 1 and 6.");
    }

});

// Test 2

it("dice - count", function loopTest ()
{
    var outputDice = [];
    var sixCount = 0;

    for(i = 0; i < 5; i++)
    {   
        outputDice.push(theDice._dice());
    }

    for(j = 0; j < outputDice.length; j++)
    {
        sixCount += 1;
        if (outputDice[j].includes(": 6"))
        {
            sixCount = 0;
        }
    }
    
    var arrDice = theDice._count().split(" ");

    if (sixCount == 0)
    {
        loopTest();
    }
    else if (sixCount !== parseInt(arrDice[arrDice.length - 2]))
    {
        throw new Error("The count is wrong.");
    }

});