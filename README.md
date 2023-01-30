# Erine_Tutorial
Este es el repositorio oficial que estare haciendo en los videos de [mi canal de youtube](https://www.youtube.com/channel/UC1NOFEDs5Q86cMs7PQdzhyw)

[npm de erine](https://www.npmjs.com/package/erine)

[Documentacion](https://erine.cyberghxst.ga)


# Instalador

```
npm install erine
```

Ejemplo del index.js

```js
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
```
