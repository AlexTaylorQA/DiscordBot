
const theGarage = require("./garage.js");
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
            message.reply("Result: " + (Math.floor(Math.random() * 6) + 1));
            break;

        default: 
              message.reply("Invalid command.");
            break;

    }
  }
  else if (message.content.includes('!garage')) {
      var theStr = message.content.substring(7, message.content.length)
      var theStr2 = theStr.trim();
      message.reply(theGarage._doCmd(theStr2));
  }

 
  
});
 
client.login('MzMzOTc0MjI1Mzk0MDczNjAw.DEUdWA.jCdcRM1eUut-oeiFgL7vinUI0Xg');