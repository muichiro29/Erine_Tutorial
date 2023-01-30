const { ErineClient } = require("erine"); ///Definimos el cleint

const { GatewayIntentBits } = require("discord.js"); //Definimos los intents

const client = new ErineClient({
  intents: [
    GatewayIntentBits.Guilds, 
     GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers
  ], ///Definimos los intents que usa nuestro bot
  prefix: "!", //Prefix
});


client.login(""); ///Token de tu bot
