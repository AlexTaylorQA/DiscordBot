function fizzBuzz(nmsg) {

    var num = nmsg;

    var outStr = "";

    for (var i = 1; i <= num; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            outStr += ("\nFizzBuzz");
        }
        else if (i % 3 == 0) {
            outStr += ("\nFizz");
        }
        else if (i % 5 == 0) {
            outStr += ("\nBuzz");
        }
        else {
            outStr += ("\n" + i);
        }

    }
    if(outStr.length > 1978)
    {
        return ("\nThe maximum end number is 430.");
    }
    else
    {
        console.log(outStr);
        return outStr;
    }

}


module.exports = 
{
	_fizzBuzz: fizzBuzz
};