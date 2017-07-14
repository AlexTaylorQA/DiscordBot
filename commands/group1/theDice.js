const theDice = require("./dice.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            group: 'group1',
            memberName: 'dice',
            description: 'This is a dice roll function. It simulates the effect of a trading card based on die results.',
            examples: ['!bot dice roll', '!bot dice count']
        });
    }

    run(msg) {
        var theMsg = msg.content.split(" ");

        switch(theMsg[2])
        {
            case "roll":
                var theOutput = theDice._dice().split("--zz--")
                msg.reply(theOutput[0]);
                
                if (theOutput[1] == "6")
                {
                    msg.channel.send({file: "./commands/group1/dmt6-x.png"});
                    break;
                }
                else
                {
                    msg.channel.send({file: "./commands/group1/dmt6.png"});
                    break;
                }

            case "count":
                msg.reply(theDice._count());
                break;
        }
        
         
    }
};