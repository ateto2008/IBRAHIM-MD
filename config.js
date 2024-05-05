const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' }) 


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Bungoma,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://awabteto:awabteto@cluster0.texhd9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Egypt";
global.github=process.env.GITHUB|| "https://github.com/awab2008";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/ER5t8uFzUcj4OmAWCcJlbM";
global.website=process.env.GURL || "https://www.youtube.com/@awab_teto" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5930a1033d6099792504.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "249124702614" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "249124701614";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "249124702614";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://i.imgur.com/6hffi3i.jpeg",
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,249xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254710772666,249xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://ibrahim-tech-1-4a7321f212d3.herokuapp.com/";

module.exports = {

  menu: process.env.MENU || "A17_MD", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©awab teto bot✴" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "@awabofficial",
  packname: process.env.PACK_NAME || "👑",
  botname : process.env.BOT_NAME  || " bot-teto",
  ownername:process.env.OWNER_NAME|| "It'x awab teto",

  sessionName:process.env.SESSION_ID || "PANTHER;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtYekFETkNQR080cVZQdnpqKzYxQ2hBWEQwZ2VqbGQ5UnNjSmZ3TFkwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGJ1Ny9ONjZya3AzWDdOZmNNL3lHbXVXVjcwdmwzaHdLTEJDMkp2ZW9EVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSnl2eGxudEE0YW5FZm5LdDh0VHd5UEg1NE9DMDJqSE5TNWs4ZW43eDJjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRjhRTElYcmtXZ1I1eWUwQkVzb1JtQjAvd0NIODJnMlVmbUQzclpIeDNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNZ2ozaDdYOHltQlpzTjk2cmpXVU42WnhQWmpjRXZETFhPQ1BhdWJIVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ6bkYzVU85TzNCKzNXRUFKN082WlY1ejMycTZkbXdrTG8yMzZ0Wk55MXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVkeUxpODhQcXI3VjY2MkJXdkNOaXB0Vnk3ekZWYUYxZlpZeHBPM1NYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1Rvc3JYcVRvM2NHSVROVml6N1AvNkVPa2lmS0Z1NDY5TFlWR2RSYXpIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAvSW5LVExvbm4yTEJDVVo0Y1ZmN2pHaXpObkdSRW04cCtKcTNvVEZLeUY2Q0w1ZVhXTmFUZjVSeXhrOWdWVXNKODBhODZVOVRRaCs3QzJqYW83ZGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5Ijoia09xNm5KYTA4NE9HMVBJRlBVaDVRUVg5S084ekxnMFVxWGd4Yys2dGoxUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOTA1OXJ1akNRRlNqeTAwYVJ3VVlwZyIsInBob25lSWQiOiJiMmJkYTJjMi0yNjEwLTQ5YzktYTE5Ny1hYmJmMGY1MWYxNTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2VrODNMVFJZZm9aQU9jRlZ1cmVvdlA1cmFBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InByNFh3V3Z0QUlCKzY1b2tZcmQ5a011MGhRMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCRFA0TVYyRCIsIm1lIjp7ImlkIjoiMjQ5MTE4MjE1MzAzOjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5UIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOSytyOEVGRU8vLzM3RUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFdkZOdmJlOXkrRFp4OTc1d3YyVmFKVFd0TjN6ZWN1U00rREVhVHZKV2hBPSIsImFjY291bnRTaWduYXR1cmUiOiJqbGo3bCtYWTFEc25DQlIwZXNWbkJtMm9YSllsM0dIUzd4YmpJbEFVM1BOSHlabXZZdHhmUzBtdXcrTHVXMTY1YnVPN3pJWnRrRGRoa0RQS2ZraWpCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0ZWb0tvSVdMcHA2L2xlaGFwSFBYT2I3d0U4V2VUSDFpaWJucGI1REJvM2V1Vzl6REtLa2lSSHNiVjJ6SnZ1Z1ZtcHFiVEE1Z2xKK3N2bTV2U3FwaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDkxMTgyMTUzMDM6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkx4VGIyM3ZjdmcyY2ZlK2NMOWxXaVUxclRkODNuTGtqUGd4R2s3eVZvUSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDk0NjA0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNQmwifQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "28a488511643f099af3ee201ead77e70",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "ADAM",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
