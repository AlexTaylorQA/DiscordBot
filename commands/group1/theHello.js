const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hw',
            group: 'group1',
            memberName: 'hw',
            description: 'This is a friendly greeting from Cornbot.',
            examples: ['!bot hw']
        });
    }

    run(msg) {
        var img = "https://vignette4.wikia.nocookie.net/yugioh/images/2/24/SweetCorn-TF05-JP-VG.png/revision/latest?cb=20120422163703.png";
        msg.channel.send({file: img});
        msg.reply("Hello world! Cornbot checking in!");
    }
};