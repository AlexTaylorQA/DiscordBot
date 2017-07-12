const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '!bot',
    disableEveryone: true
});

client.registry
    .registerGroups([
        ['group1', 'Our First Command Group']
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
});

client.login('MzMzOTc0MjI1Mzk0MDczNjAw.DEUdWA.jCdcRM1eUut-oeiFgL7vinUI0Xg');