
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "d2dw1IqL#25F_NwiNzhV7W_8PbneTEwtpx451AnVL4KQn62fPSmk",
MONGODB: process.env.MONGODB || "mongodb+srv://pasindupasindu:VnrhrETa6cMGbcR8@cluster0.tx04t.mongodb.net/",
};
