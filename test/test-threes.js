const theThrees = require("../commands/group1/threes.js");


// Test 1

it("threes - 10000", function ()
{
    var nmsg = 10000;
    var outputThree = theThrees._threes(nmsg);
    var outArr = outputThree.split("\n");

    if(parseInt(outArr[outArr.length - 1]) !== 1)
    {
        throw new Error("The final number should be 1.");
    }

});