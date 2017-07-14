var theTries = 0;

function diceRoll(){
    var randNum = (Math.floor(Math.random() * 6) + 1);
    var outStr = "\nYou activated 'Dangerous Machine Type-6'.\n\nDie result: " + randNum + "\n\n";
    theTries += 1;
    switch(randNum){
        case 1:
            outStr += "Discard 1 card.";
            break;
        
        case 2:
            outStr += "Your opponent discards 1 card.";
            break;
        
        case 3:
            outStr += "Draw 1 card.";
            break;
        
        case 4:
            outStr += "Your opponent draws one card.";
            break;
        
        case 5:
            outStr += "Destroy 1 monster your opponent controls.";
            break;
        
        case 6:
            outStr += "Destroy this card.";
            theTries = 0;
            break;
        
    }
    return outStr + "--zz--" + randNum;
}

function checkTries(){
    if(theTries == 1)
    {
        return "\nYou have successfully activated \'Dangerous Machine Type-6\' " + theTries + " time."
    }
    else if(theTries > 6)
    {
        return "\nYou have successfully activated \'Dangerous Machine Type-6\' " + theTries + " times.\n\nCongrats! You've beaten the odds! (1/6)"
    }
    else
    {
        return "\nYou have successfully activated \'Dangerous Machine Type-6\' " + theTries + " times."
    }
}
    

module.exports =
    {
        _dice: diceRoll,
        _count: checkTries

    };