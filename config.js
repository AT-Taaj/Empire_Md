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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349061693749";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_56_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpvbmFET2hVRXRteGs3NGhWbm1YMmpTR0VKZGF0cXpaU3MxL1cwbkFDbDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1FMTFOVEJGUnNHTmRxc0FJSloyNkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmU3OGZlOTYtMGEwYy00ODA2LTk3NTItOWRkNzUwNjBkNzA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMTEyLFxuICAgICAgMTc0LFxuICAgICAgMTMyLFxuICAgICAgMjUzLFxuICAgICAgOTUsXG4gICAgICAyMjksXG4gICAgICAyMzMsXG4gICAgICA1MSxcbiAgICAgIDE3NixcbiAgICAgIDkwLFxuICAgICAgMTM3LFxuICAgICAgMjAyLFxuICAgICAgMjE3LFxuICAgICAgNTYsXG4gICAgICAyMDksXG4gICAgICA3LFxuICAgICAgMTA2LFxuICAgICAgNDUsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNTUsXG4gICAgICAxNjgsXG4gICAgICA4MSxcbiAgICAgIDc1LFxuICAgICAgMTAzLFxuICAgICAgMjEwLFxuICAgICAgNjcsXG4gICAgICA1NCxcbiAgICAgIDc0LFxuICAgICAgODIsXG4gICAgICAyMzIsXG4gICAgICAyNTQsXG4gICAgICAxMTQsXG4gICAgICAxNjIsXG4gICAgICAxMDMsXG4gICAgICAxMTQsXG4gICAgICAxNzAsXG4gICAgICA5OSxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZORU41MjNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYxNjkzNzQ5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDEyOTQzMzUxNDAxOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQWGljMEdFSmZpeGJzR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXA5ZjNxZGxmWXQwdmlMSlF0cUYwemtLbmZzUzRIdmFWN2IzRzJpb2Mzaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIdTVTVHBkVXNobzFKMTBqczJRQkxqcTFzSGR5VDZvUTEzUlRZc1lJNDYrSGp0RlRKak5lTnM0TEcwSEp2Z1lkbG1lenJDaFZudXh6VmRnUDAyUEhBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwZTFmbEtLUXRKaGRVNWdFa0RkejNTM0FaM0RKbzg0K28yVmgyaDJwZGtPRWxRN2VvRjVTK0RtUVRIcVRmblFRUFVyUCs2TWQ0WVFBSWZybks2cllBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYxNjkzNzQ5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0ODc3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHY0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdjSC5qc29uIjogIntcImtleURhdGFcIjpcImVtYnlOdG1KclNuTVJ3Z0RpNHEvdXFaOFlVUnpla0hWaXFMRmc0NE53R3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MjI1MjA4MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU0ODY4ODU3MzJcIn0iCn0="  // PUT your SESSION_ID 


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
