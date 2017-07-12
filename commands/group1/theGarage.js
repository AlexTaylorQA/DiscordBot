const theGarage = require("./garage.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'garage',
            group: 'group1',
            memberName: 'garage',
            description: 'This is the garage.',
            examples: ['garage']
        });
    }

    run(msg) {
        var theStr = msg.content.substring(11, msg.content.length)
        var theStr2 = theStr.trim();
        msg.reply(theGarage._doCmd(theStr2));
    }
};