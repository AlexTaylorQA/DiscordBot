function diceRoll(){
    var randNum = (Math.floor(Math.random() * 6) + 1);
    var outStr = "\nYou activated 'Dangerous Machine Type-6'.\n\nDie result: " + randNum + "\n\n";
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
            break;
        
    }
    return outStr;
}

module.exports =
    {
        _dice: diceRoll

    };