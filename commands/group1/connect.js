var request = require("request");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'api',
            group: 'group1',
            memberName: 'api',
            description: 'This is the Steam API.',
            examples: ['api']
        });
    }

    run(msg) {
        apiConnect(msg);
    }
};

function apiConnect(msg) {

    var theInput = msg.content.split(" ");
    var theName = "";

    for (i = 2; i < theInput.length; i++) {
        theName += (theInput[i] + " ");
    }
    theName = theName.trim();
    console.log(theName);

    //var requestURL = "http://api.steampowered.com";
    var requestURL = "http://api.steampowered.com/ISteamApps/GetAppList/v0002"

    var r = request(requestURL, function (err, res, body) {

        for (var key in JSON.parse(body)) {
            var value = JSON.parse(body)[key];
        }
        
        nuValue = sortAPI(value);
        search(msg, nuValue, theName);
    });
    
}

function sortAPI(theValue) {
    theValue.apps.sort(function (a, b) {
        var x = a.name < b.name ? -1 : 1;
        return x;
    });
    return theValue;
}

function search(theMsg, theValue, theName) {
    outStr = "\nAll \"" + theName + "\" games: ";
    if (theValue.apps.length > 0) {
        for (i = 0; i < theValue.apps.length; i++) {
            if (theValue.apps[i].name.includes(theName)) {
                outStr += "\n- " + theValue.apps[i].name;
            }
        }
    }
    if(outStr.length > 1999)
    {
        theMsg.reply("\nToo many results. Please input a more specific search word.");
        console.log(outStr);
    }
    else
    {
        theMsg.reply(outStr);
        console.log(outStr);
    }
}
