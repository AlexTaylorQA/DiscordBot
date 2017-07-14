const theGarage = require("./garage.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'garage',
            group: 'group1',
            memberName: 'garage',
            description: 'This is the garage. Manage your cars. (NOTE: Creating faults in cars is optional, just remove them from the command.)',
            examples: ['!bot garage create (Manufacturer) (Model) (Registration) (Fault 1) (Fault 2) ... ', '!bot garage check in (Registration)', '!bot garage check out (Registration)', '!bot garage output']
        });
    }

    run(msg) {
        var theStr = msg.content.substring(11, msg.content.length)
        var theStr2 = theStr.trim();
        msg.reply(theGarage._doCmd(theStr2));
    }
};