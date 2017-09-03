Bvar Discord = require('discord.io');
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
bot.SendMessage({
  to: channelID,
  message: 'testing'
});
bot.on('message', function (user, userID, channelID, message, evt) {
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
            case 'what':
                bot.sendMessage({
                    to: channelID,
                    message: (testVariable)
                });
            break;
            case 'test':
                for (i=0; i < 10; i++){
                bot.sendMessage({
                    to: channelID,
                    message: (testVariable + i) //don't be dumb like me and try to put a ; here
                });
}
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
			 case 'tyreem':
                bot.sendMessage({
                  to: channelID,
                  message: ('supreem')
                });
			break;
			 case 'adam':
                bot.sendMessage({
                  to: channelID,
                  message: ('what did adam even do real question')
                });
			      break;
			      case 'tyreem':
				        bot.sendMessage({
					        to: channelID,
					        message: ('supreeeeeeeeem')
				        });
            break;
            // Just add any case commands if you want to..
         }
     }
});
