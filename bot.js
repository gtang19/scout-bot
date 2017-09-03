var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

//Experimenting with variables
var testVariable = (1);
bot.on('message', function (user, userID, channelID, message, evt) {
  //Allows the bot to behave differently based on what room it is in
  if (channelID == 353938633641951251){ //test-channel
        // Our bot needs to know if it will execute a command
        // It will listen for messages that will start with `!`
        if (message.substring(0, 1) == '!') {               //commands starting with '!'
            var args = message.substring(1).split(' ');     // args splits up each word after the '!'
            var cmd = args[0];                              // the first word becomes the command

            args = args.splice(1);                          // the command is removed from the arguments list
            switch(cmd) {
                case 'test':
                    bot.sendMessage({
                      to:channelID,
                      message: message
                    });
                    console.log('test')
                break;
                case 'ping':
                    bot.sendMessage({
                        to: channelID,
                        message: 'pong'
                    });
                break;
                case 'channelID': //Displays channel ID
                    bot.sendMessage({
                        to: channelID,
                        message: channelID
                    });
                break;
                case 'github':
                    bot.sendMessage({
                        to: channelID,
                        message: 'https://github.com/gtang19/scout-bot'
                    });
                break;

                // Just add any case commands if you want to..
             } //end of switch
         } //commands starting with '!'
      } //test-channel
});
