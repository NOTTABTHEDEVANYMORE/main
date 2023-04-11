const discord = require("discord.js");
const bot = new discord.Client({
  intents: [
    discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES
  ]
});
const token = "MTA5NTIzMjkwNTUwNjIxMzg5OA.GL3dB0.AVlEwLRImrKGsKCM4eHEMvab4QBJ8NOKwk57ZY";

bot.on("ready", async() => {
  console.log("W");
});

bot.on("message", async(message) => {

});

const channel00 = bot.channels.cache.find(channel => channel.id === "725345321596485756");

function SaveImageToDiscordServer(fileww) {
  //channel00.send({files: [{ attachment: fileww }]});
};

bot.login(token);
