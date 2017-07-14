const theFibonacci = require("./fibonacci.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fibonacci',
            group: 'group1',
            memberName: 'fibonacci',
            description: 'This is a Fibonacci sequence generator. Input two numbers and/or a maximum nth place to calculate to.',
            examples: ['!bot fibonacci start (x) (y)', '!bot fibonacci add (x)', '!bot fibonacci display']
        });
    }

    run(msg) {
        var theMsg = msg.content.split(" ");
        switch(theMsg[2])
        {
            case "start":
                msg.reply(theFibonacci._inFib(parseInt(theMsg[3]), parseInt(theMsg[4])));
                break;
            
            case "add":
                msg.reply(theFibonacci._addFib(parseInt(theMsg[3])));
                break;
            
            case "display":
                msg.reply(theFibonacci._displayFib())
                break;

            default:
                msg.reply("\nPlease insert a valid command.")
                break;
            
        }
        
    }
};
