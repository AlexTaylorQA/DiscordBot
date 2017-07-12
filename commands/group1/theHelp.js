const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'group1',
            memberName: 'help',
            description: 'This is the help.',
            examples: ['help']
        });
    }

    run(msg) {
        msg.reply(  
        "\nCommands:\n\n- dice\n- garage (create / check in / check out / output)\n- hw");
    }
};