var listFib = [];

function inFib(a, b) {
    console.log("/// " + a + " - " + b + " ///");
    if (a <= b) {
        listFib = [];
        listFib.push(a);
        listFib.push(b);

        return "\nNumbers (" + a + ", " + b + ") initialise the sequence."
    }
    else
    {
        return "\nThe second inputted number must equal or exceed the first number."
    }
}

function addFib(num) {
    if (listFib.length >= 2) {
        for (i = 0; i < num; i++) {
            listFib.push(listFib[listFib.length - 1] + listFib[listFib.length - 2]);
        }
        return (displayFib());
    }
    else {
        return "\nThe list does not contain two or more numbers. Please re-initialise the list.\n\n!bot fibonacci (x) (y)\n\n Where (x) and (y) are the first two numbers in the sequence.";
    }

}

function displayFib() {
    var outStr = "\n";
    for (i = 0; i < listFib.length; i++) {
        outStr += listFib[i] + ", "
    }
    return outStr.substring(0, outStr.length - 2)
}
module.exports =
    {
        _inFib: inFib,
        _addFib: addFib,
        _displayFib: displayFib

    };
