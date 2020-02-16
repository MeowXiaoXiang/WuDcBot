var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on("ready", function (evt) {
    logger.info("Connected");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.id + ")");
});
bot.on("message", function (user, userID, channelID, message, evt) {
if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
//bot.sendMessage({to: channelID,message: ''});
        switch(cmd) {
            case 'ran':
			case 'Ran':
			case 'RAN':
			var ran = Math.floor(Math.random()*16);
			if (ran == 15){bot.sendMessage({to: channelID,message: ':clap: @everyone' + user + ' 成功的骰出了 ' + ran + ' 點！:clap: '});}
			if (ran == 0){bot.sendMessage({to: channelID,message: ' :thumbsdown: @everyone' + user + ' 是個魯蛇他只骰出了 ' + ran + ' 點！ :thumbsdown: '});}
			if (ran != 0 && ran != 15){bot.sendMessage({to: channelID,message: user + ' 骰出了 ' + ran + ' 點！'});}
            break;
			case 'ping':
			bot.sendMessage({to: channelID,message: 'Pong！'});
			break;
			case 'r6':
			case 'R6':
			case '阿6':
			case '啊6':
			bot.sendMessage({to: channelID,message: '<@&614789432247320576> 組隊缺人～揪滿開團！'});
			var ranr6 = Math.floor(Math.random()*15)+1;
			if (ranr6 == 15){bot.sendMessage({to: channelID,message: '@everyone 全國最大Ｒ２０線上商城上線啦！ \r\n欲求不滿這內洽：<@' + userID + '>'});}
			break;
			case 'mcl':
			case 'mc登入器':
			bot.sendMessage({to: channelID,message: 'Minecraft當個創世神盜版啟動器 \r\n https://cdn.discordapp.com/attachments/670907788649824257/673552684581912606/Shiginima_Launcher_SE_v4400.exe'});
			break;
			case 'mc':
			bot.sendMessage({to: channelID,message: '@everyone\r\n《TBSC》1.12.2 槍戰伺服器開服中 \r\n伺服器ＩＰ：25.31.211.234'});
			break;
			case 'r6help':
			bot.sendMessage({to: channelID,message: '@everyone 02/13 分隊系統已更新為24H制\r\n分隊系統目前支援 3人到10人分組\r\n!r6join(!r6j) 進入分組名單 <--先使用\r\n!r6list 查看已經入人員名單\r\n!r6clear 清除人員名單 \r\n!r6leave(!r6l) 離開分組名單 \r\n!r6kick 踢出成員名單內的成員\r\n!r6ran 進行分組 <---等都加入分組名單後使用\r\n\r\n若有BUG直接PM <@476422785833631749> '});
			break;
			case 'user':
			bot.sendMessage({to: channelID,message: 'user：' + user + '\r\nuserID：' + userID + '\r\nchannelID：' + channelID});
			break;
			case 'ha':
			bot.sendMessage({to: channelID,message: '<@' + userID + '> \r\n 載點：https://secure.logmein.com/hamachi.msi　\r\nHamachiID:Emilia_OwO_01 ~ Emilia_OwO_10 \r\n密碼：1'});
			break;
			case '':
			break;
         }

     }
});
