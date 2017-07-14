const theDice = require("./dice.js");

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
        var img = "https://vignette2.wikia.nocookie.net/yugioh/images/2/2d/DangerousMachineType6-LCJW-EN-C-1E.png/revision/latest/scale-to-width-down/300?cb=20131012122138.png";
        msg.channel.send({file: img})
        msg.reply(theDice._dice());
    }
};