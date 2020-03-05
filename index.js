var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var sw = ' '
var wuchieh = '670610648433950721'
var chan = '627471208291762176';
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
	var msg1 = args[1];
	var msg2 = args[2];
	var msg3 = args[3];
	var msg4 = args[4];
	var msg5 = args[5];
	var error = args[999];
//bot.sendMessage({to: channelID,message: ''});
        switch(cmd) {
            case 'ran':
			case 'Ran':
			case 'RAN':
			if (userID == ''){
				bot.sendMessage({to: channelID,message: ':x: ID：<@' + userID + '>已禁止使用此指令到2020/02/25 :x: '});
			}else {
			var ran = Math.floor(Math.random()*16);
			if (ran == 15){bot.sendMessage({to: channelID,message: ':clap: @everyone' + user + ' 成功的骰出了 ' + ran + ' 點！:clap: '});}
			if (ran == 0){bot.sendMessage({to: channelID,message: ' :thumbsdown: @everyone' + user + ' 是個魯蛇他只骰出了 ' + ran + ' 點！ :thumbsdown: '});}
			if (ran != 0 && ran != 15){bot.sendMessage({to: channelID,message: user + ' 骰出了 ' + ran + ' 點！'});}
			//var ran66 = Math.floor(Math.random()*20);
			//if (ran66 == 15){bot.sendMessage({to: channelID,message: '@everyone <@' + userID + '>不做人啦！ \r\n https://img.moegirl.org/common/a/a6/Jojoios-4.jpg'});}
			}
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
			bot.sendMessage({to: channelID,message: '<@' + userID + '> \r\n載點：https://secure.logmein.com/hamachi.msi　\r\nHamachiID:Emilia_OwO_01 ~ Emilia_OwO_10 \r\n密碼：123'});
			break;
			case 'am':
			bot.sendMessage({to: channelID,message: '@everyone睡你麻逼起來Hight 是時候該起床啦！ '});
			break;
			case 'setchan':
			case 'setchannel':
			bot.sendMessage({to: channelID,message: 'channe已設定為' + msg1});
			chan = msg1;
			break;
			case 'showch':
			bot.sendMessage({to: channelID,message: chan});
			break;
			case 'chat':
			if (msg2 == error){
			msg2 = '';
			}
			if (msg3 == error){
			msg3 = '';
			}
			if (msg4 == error){
			msg4 = '';
			}
			if (msg5 == error){
			msg5 = '';
			}
			channelID = chan;
			bot.sendMessage({to: channelID,message: msg1 + ' ' + msg2 + ' ' + msg3 + ' ' + msg4 + ' ' + msg5});
			channelID = wuchieh; 
			bot.sendMessage({to: channelID,message: user + ' 利用!msg說：' + msg1 + ' ' + msg2 + ' ' + msg3 + ' ' + msg4 + ' ' + msg5});
			break;
			case 'help':
			bot.sendMessage({to: channelID,message: '!r6	!ping	!ran	!mc	!mcl	!am	!user	!chat'});
			break;
			case '':
			break;
         }

     }
});
