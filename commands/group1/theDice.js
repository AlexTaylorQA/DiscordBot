const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            group: 'group1',
            memberName: 'dice',
            description: 'This is the dice roll.',
            examples: ['dice']
        });
    }

    run(msg) {
        msg.reply("Result: " + (Math.floor(Math.random() * 6) + 1));
    }
};