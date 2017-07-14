function threes(msg) {

    var theMsg = msg.content.split(" ");
    var num = parseInt(theMsg[2]);

    var outStr = "";

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
    msg.reply(outStr);
}

module.exports =
    {
        _threes: threes

    };