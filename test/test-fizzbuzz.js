const theFizzbuzz = require("../commands/group1/fizzbuzz.js");

// Test 1

it("fizzbuzz - 100", function ()
{
    var nmsg = 100;
    var outputFB = theFizzbuzz._fizzBuzz(nmsg);

    console.log("......");

    if((outputFB.split("\n").length - 1) !== 100)
    {
        throw new Error("The end number should be 100.");
    }

});