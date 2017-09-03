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

  /*bot.sendMessage({
    to: channelID,
    message: testVariable++
  }); */



    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // hecking bean
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong'
                });
            case 'resetTest':
                testVariable = 1
            break;
            case 'loop':
                while(testVariable < 3){
                 bot.sendMessage({
                   to:channelID,
                   message: (testVariable++)
                 });
               }
            break;
            case 'what':
                bot.sendMessage({
                    to: channelID,
                    message: (testVariable)
                });
            break;
            case 'test':
                bot.sendMessage({
                    to: channelID,
                    message: '!test'
                });

            break;
            case 'github':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://github.com/gtang19/scout-bot'
                });
            break;
            case 'shoop':
                bot.sendMessage({
                  to: channelID,
                  message: ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                });

			break;
            // Just add any case commands if you want to..
         }
     }
});
