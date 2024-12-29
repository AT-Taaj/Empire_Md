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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_02_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid281S0p0cUVYSGwvUWNNTDlVN0MvNE9oNUVNS25XaXFqYmRlMXo1UzBQdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMwOTk1NjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QkI0Q0FEQUVFMEMyQjRFMTk2MUJGMzAzMTgyREYzOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU0ODQ1NDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXQxN2dXRWtSU2Fyc0U0NzhUblpsQVwiLFxuICBcInBob25lSWRcIjogXCIyYzkyZTM4OS0zNWFjLTQ1MTYtOTViZS1iMWNjMzYxN2MxYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICA4NyxcbiAgICAgIDU3LFxuICAgICAgODEsXG4gICAgICA0MixcbiAgICAgIDUzLFxuICAgICAgMTQsXG4gICAgICAxNTUsXG4gICAgICA2MSxcbiAgICAgIDE3NSxcbiAgICAgIDE0MSxcbiAgICAgIDE3OSxcbiAgICAgIDUxLFxuICAgICAgMTcyLFxuICAgICAgMTk2LFxuICAgICAgNjcsXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICAxMTIsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMzQsXG4gICAgICAxNzUsXG4gICAgICA0NSxcbiAgICAgIDIyNSxcbiAgICAgIDIyLFxuICAgICAgMTA0LFxuICAgICAgMjU0LFxuICAgICAgMTQwLFxuICAgICAgNzksXG4gICAgICAxNTAsXG4gICAgICA5NyxcbiAgICAgIDIyNixcbiAgICAgIDExMixcbiAgICAgIDE2NSxcbiAgICAgIDE1MSxcbiAgICAgIDEwNSxcbiAgICAgIDk2LFxuICAgICAgMjIzLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFOVERHOFZDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwOTk1NjkyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBVC1UYWFqXCIsXG4gICAgXCJsaWRcIjogXCIzNjUwMzAyNzcxNjE3NTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpVzM3Y0NFUFhJeGJzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmNNVllYU1RucENNekhwYWk2VS9kdTJYT29qRE5LUnJxZ0hYeFR3SHAwND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqeTBCL3dHVEhmK09CeWVIMDAzUmZDMnRRZEF0aUR4ajZvZlVjUlpnd3Y5cS9seDl2c3BrcUhLWjlZUkxlVmZBVk9yY2dOMTRmRFRIT1Q0cVhWelFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsVERJcDdXQU9BZnExRFM2dXh6TTF3YmM1TWpVTkg5WlJwNmMxK09rdzZORW51azFadTB3cm83d0IxZk5XOUdJSFlJV2R5clFNNDE1RXl0K01kN0dpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMwOTk1NjkyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTQ4NDUzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlsQlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWxCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjBvd2VWY1Y3SVV0NEx0QVlWdmVLT1R6TnFUL01rYVNnZXNKd3FMMTUvZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NTM3NzM2MDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NDMyNTAyMDhcIn0iCn0="  // PUT your SESSION_ID 


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
