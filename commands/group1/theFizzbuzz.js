const theFizzbuzz = require("./fizzbuzz.js");

const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fizzbuzz',
            group: 'group1',
            memberName: 'fizzbuzz',
            description: 'This is FizzBuzz. Input a maximum number to get results.',
            examples: ['!bot fizzbuzz (x)']
        });
    }

    run(msg) {
        var theMsg = msg.content.split(" ");
        msg.reply(theFizzbuzz._fizzBuzz(parseInt(theMsg[2].trim())));
    }
};
