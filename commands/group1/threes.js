function threes(num) {

    var outStr = "\n" + num;

    while (num > 1) {

        if (num % 3 === 0) {

            num /= 3;

            outStr += ("\n" + num);

        }

        else if ((num + 1) % 3 === 0) {

            num += 1

            num /= 3;

            outStr += ("\n" + num);

        }



        else if ((num - 1) % 3 === 0)

        {

            num -= 1

            num /= 3;

            outStr += ("\n" + num);

        }
        
    }
    console.log(outStr);
    return outStr;
}

module.exports =
    {
        _threes: threes

    };