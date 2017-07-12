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
        var x = msg.content.substring(8, msg.content.length).trim();
        var y = x.split(" ");
        apiConnect(msg, y);
    }
};

function apiConnect(msg, addToURL) {

    var requestURL = "http://api.steampowered.com";
    //var requestURL = "http://api.steampowered.com/ISteamApps/GetAppList/v0001"

    for (a = 0; a < addToURL.length; a++) {
        requestURL += ("/" + addToURL[a]);
    }

    //var s = {};
    //var t;

    var r = request(requestURL, function (err, res, body) {

        for (var key in JSON.parse(body)) {
            var value = JSON.parse(body)[key];
            

        }
        msg.reply("... Processing ...")
        nuValue = sortAPI(value);
        halflife(msg, nuValue);
        tf(msg, nuValue);
        rl(msg, nuValue);
        de(msg, nuValue);
        ws(msg, nuValue);

        //console.log(value);

        //return value;

        // s = JSON.parse(body).applist.apps.app;
        //t = s.slice(3,13);
        //var getClassOf = Function.prototype.call.bind(Object.prototype.toString);
        //console.log("/////");
        //console.log(getClassOf(value));
        //console.log(value);
        //doReply(msg, value);

        //console.log(s);
        //t = JSON.stringify(s);
    });
    //console.log("\n//////\n" + requestURL + "\n//////\n")
    console.log(value);
}

function sortAPI(theValue){
    theValue.apps.sort(function(a,b){ 
        var x = a.name < b.name? -1:1; 
        return x; 
    });
    return theValue;
}

function halflife(theMsg, theValue){
    outStr = "\nAll \"Half-Life\" games: ";
    for(i = 0; i < theValue.apps.length; i++)
    {
        if(theValue.apps[i].name.includes("Half-Life"))
        {
            outStr += "\n- " + theValue.apps[i].name;
        }
    }
    theMsg.reply(outStr);
}

function tf(theMsg, theValue){
    outStr = "\nAll \"Team Fortress\" games: ";
    for(i = 0; i < theValue.apps.length; i++)
    {
        if(theValue.apps[i].name.includes("Team Fortress"))
        {
            outStr += "\n- " + theValue.apps[i].name;
        }
    }
    theMsg.reply(outStr);
}

function rl(theMsg, theValue){
    outStr = "\nAll \"Rocket League\" games: ";
    for(i = 0; i < theValue.apps.length; i++)
    {
        if(theValue.apps[i].name.includes("Rocket League"))
        {
            outStr += "\n- " + theValue.apps[i].name;
        }
    }
    theMsg.reply(outStr);
}

function de(theMsg, theValue){
    outStr = "\nAll \"Deus Ex\" games: ";
    for(i = 0; i < theValue.apps.length; i++)
    {
        if(theValue.apps[i].name.includes("Deus Ex"))
        {
            outStr += "\n- " + theValue.apps[i].name;
        }
    }
    theMsg.reply(outStr);
}

function ws(theMsg, theValue){
    outStr = "\nAll \"Wolfenstein\" games: ";
    for(i = 0; i < theValue.apps.length; i++)
    {
        if(theValue.apps[i].name.includes("Wolfenstein"))
        {
            outStr += "\n- " + theValue.apps[i].name;
        }
    }
    theMsg.reply(outStr);
}


/*
function doReply(msg, output) {
    //msg.reply("\nName: " + output.name);
    console.log(output);
    //return output;
    //msg.reply(JSON.stringify(output, null, 2).split(" },").slice(0,10));
}
*/