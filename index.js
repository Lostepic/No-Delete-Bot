require('dotenv').config();

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ['MESSAGE ']
});

client.on("ready", () => {
    console.log("Bot is online & ready");
})

client.on("messageDelete", msg => {
    msg.reply("Please do not delete your messages");
})

client.on("message", msg => {
    if (msg.content === "Hi bot") {
        msg.reply("Hello I am no delete");
    }
    else if (msg.content === "who made the bot") {
        msg.channel.send("This bot was created by Aaran#0001");
    }
})

if(!process.env.BOT_TOKEN) {
    throw "You are missing BOT_TOKEN in your .env file, update this and try again.";
}

client.login(process.env.BOT_TOKEN);