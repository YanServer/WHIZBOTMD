const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hahaha@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/L8m9LETcFsM796UKuIUPlv";
global.website = process.env.GURL || "https://chat.whatsapp.com/L8m9LETcFsM796UKuIUPlv";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "6282313360152";
global.owner = process.env.OWNER_NUMBER || "6282313360152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Asta;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01EREVMajR1VW80MFN2MTdyWmtGMkMvR1ZlalgxOEdhTE9lcXhCNjhIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNZczVWNGF4QTlLTmUya1RSaU16OFBkN1U0YlQ3V1JxcFlvUkVuNlZ6MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRGYxdFRGMFdhZmhkc2RzUVlBZTE4b2hYYUJvdmtseW5DUFhMZXY3alhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabVZEeitZZXRXYW1sbFFzek9MUGRheE91MU45WDJnb29BNHd3WHlEZTNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9BOFlFdyt3cUwvRkRYZFZ3YkF6L2UvTUI3eE1ZVWZnWFVIcHlnOHZYMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpGMnJMMWtBME94dzFucjc1dHAzVCtpditmSjU2RUNQMFNjRERTYk5LeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUErUlA2enR1bkFHUFRGMm8zMUxtVVA2blJpL2Y4WkpxdEc3T1hjUWFFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVppbksrVmZGVXV3TnJLR2tYOWo0WUY3dC9uUlg4TEI0MitUZUd0d0Mwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvV1NqMHh1QURuVVp2YUxqYjZOMTNDQTA3OW51UGFSTzBBNS9CVXhJNk1qSWFwRkVwUnphaldsRWwxeWhkRktvU0N0T0FKUk9KaFpsZVY2THlpWmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6IlYzUWZwd053Z095VE1FQkJ3N1VQcTJRbDdlalg5TVd4bGp2a1huVFVHMVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJva2pGUGJuUk9lRWQtRzVkNE03YUEiLCJwaG9uZUlkIjoiMTcxNmM2MjAtY2JlMy00YjVmLTgxMTEtYjE5N2EwMDJkNTI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRDLzEvVGFnNHlvWVN5WUJyWE1RWEtLeDJlYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIREZ4ZTJqMlNocU1MMFhZbzhPajNRNU9wNjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDdGWDRBNjkiLCJtZSI6eyJpZCI6IjYyODIzMTMzNjAxNTI6MzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhNGxWc1FydVAxc2dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imw0WEpBcTlreXhCd3BodHY1RVVlUFhrK2QzRktoUml3Zmo0a3lhTHU4REE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1ZaWxEMnRyTUlzZldZclp0UTlYbXI4djd3UDVud0Y3YTRKclJLa29YbytEODg1dU9kb2Y3cnNmM2tUQ0p1UnlqMmNYTmhMK2NudWNRb1JXNGNuUkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOTW1jQnlnV1R0L0FNcTU2bitnRXhjOHRHa1c0K1ZENWVRTUZ5bUhWamZaZUIxRFYxUHkreVVSbEtpWjBLeW1rdEtTKytlVXpCMkVBOHdaWXpXdmVpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODIzMTMzNjAxNTI6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmVGeVFLdlpNc1FjS1liYitSRkhqMTVQbmR4U29VWXNINCtKTW1pN3ZBdyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzM5OTk5NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdlQifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "ARYAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
