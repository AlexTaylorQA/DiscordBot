const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hw',
            group: 'group1',
            memberName: 'hw',
            description: 'This is the greeting.',
            examples: ['hw']
        });
    }

    run(msg) {
        msg.reply("Hello world!");
    }
};