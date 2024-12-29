const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347030995692";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_38_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInczUGRQZnBnM29Sc0Z0QWs1bEFTaGFDRlVwY3YreTVha2hXR3MzRVdrQXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZ2dHhyQ05lVFdPRjBsRi1FU0pyQ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTAxZGM4YjQtYmM2MC00YTk1LWIwZmMtYWNjOTJiODE0N2Y1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDE3NixcbiAgICAgIDE4OCxcbiAgICAgIDEwNSxcbiAgICAgIDE5NixcbiAgICAgIDQ2LFxuICAgICAgMjMwLFxuICAgICAgMTQyLFxuICAgICAgMTksXG4gICAgICAyMjUsXG4gICAgICAyNTEsXG4gICAgICAxMSxcbiAgICAgIDI0MyxcbiAgICAgIDEwNixcbiAgICAgIDI1NCxcbiAgICAgIDI1MSxcbiAgICAgIDkyLFxuICAgICAgMTAxLFxuICAgICAgMTQ1LFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTA5LFxuICAgICAgMjIzLFxuICAgICAgMjM1LFxuICAgICAgMjAxLFxuICAgICAgMTg4LFxuICAgICAgMTM3LFxuICAgICAgMTQ2LFxuICAgICAgNzQsXG4gICAgICAxOTksXG4gICAgICAxNCxcbiAgICAgIDIwMyxcbiAgICAgIDE0OSxcbiAgICAgIDE1MixcbiAgICAgIDE3NSxcbiAgICAgIDExMixcbiAgICAgIDc5LFxuICAgICAgMTc2LFxuICAgICAgMjAyLFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVXVkRWWEhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwOTk1NjkyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBVC1UYWFqXCIsXG4gICAgXCJsaWRcIjogXCIzNjUwMzAyNzcxNjE3NTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpVzM3Y0NFUEc5eGJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmNNVllYU1RucENNekhwYWk2VS9kdTJYT29qRE5LUnJxZ0hYeFR3SHAwND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6WmNZOENwaTlsdzlZbktqQllXQ1M1RFp4K0dqUkY1WVZ2KzRIdHdqeXZnWnpNenF0cnVQNkI5d3Y3dnlvYVZDL1V4aXhaOXNjTTFXMkVnNWVrdjNCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2Nk14Mjh1KzFId1o1OWxITCthelNLbGc2RkFKN2YvWEZRM3V5TmtFTmoyamRGVm1IM2lvdk9lV3hYcXVCVU44V1lvTjhsK3ltUFVFT1VSakJiejZqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMwOTk1NjkyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ4MzEyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlsQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWxCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjBvd2VWY1Y3SVV0NEx0QVlWdmVLT1R6TnFUL01rYVNnZXNKd3FMMTUvZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTM3NzM2MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NDMyNTAyMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
