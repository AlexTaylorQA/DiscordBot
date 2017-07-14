const theFibonacci = require("../commands/group1/fibonacci.js");

// Test 1

it("fibonacci - [0, 1]", function ()
{
    var a = 0;
    var b = 1;
    var outputFib = theFibonacci._inFib(a, b);
    
    var outArr = outputFib.split(", ");
    
    if(parseInt(outArr[0]) !== 0 && parseInt(outArr[1]) !== 1)
    {
        throw new Error("The sequence should be initialised with numbers [0, 1].");
    }
    
});


// Test 2

it("fibonacci - [0,1], add ten more numbers to the sequence.", function ()
{
    var a = 0;
    var b = 1;
    var c = 10;

    theFibonacci._inFib(a, b);
    var outputFib = theFibonacci._addFib(c);
    var outArr = outputFib.split(", ");
    
    if(parseInt(outArr[outArr.length - 1]) !== 89)
    {
        throw new Error("The final number in the sequence beginning with [0, 1] should equal 89.");
    }

});