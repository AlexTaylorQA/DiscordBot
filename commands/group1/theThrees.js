const theThrees = require("./threes.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'threes',
            group: 'group1',
            memberName: 'threes',
            description: 'This is a demo of dividing a number by 3 until it becomes 1.',
            examples: ['garage']
        });
    }

    run(msg) {
        theThrees._threes(msg);
    }
};