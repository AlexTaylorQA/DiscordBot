const theThrees = require("./threes.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'threes',
            group: 'group1',
            memberName: 'threes',
            description: 'This is a demo of dividing a number by 3 until it becomes 1. (NOTE: (x) represents the number you want to start from.)',
            examples: ['!bot threes (x)']
        });
    }

    run(msg) {
        var theMsg = msg.content.split(" ");
        msg.reply(theThrees._threes(parseInt(theMsg[2].trim())));
    }
};