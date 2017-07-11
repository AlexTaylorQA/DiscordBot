const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log('I am ready!');
});
 
client.on('message', message => {
  if (message.content.includes('!bot')) {
    var cmd = message.content.substring(5,message.content.length);
    
    switch(cmd)
    {
        case "hw": 
            message.reply("Hello world!");
            break;

        case "dice":
            for(i = 0; i < 15; i++){
            message.reply("Result: " + (Math.floor(Math.random() * 6) + 1));
            }
            break;

        default: 
            message.reply("Invalid command.");
            break;

    }
  }
 
  
});
 
client.login('MzMzOTc0MjI1Mzk0MDczNjAw.DEUdWA.jCdcRM1eUut-oeiFgL7vinUI0Xg');