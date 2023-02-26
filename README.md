# Erine_Tutorial
Este es el repositorio oficial que estare haciendo en los videos de [mi canal de youtube](https://www.youtube.com/channel/UC1NOFEDs5Q86cMs7PQdzhyw)

[npm de erine](https://www.npmjs.com/package/erine)

[Documentacion](https://erine.cyberghxst.ga)

[Servidor de soporte](https://discord.gg/WKv2zYFhtH)


# Instalador

```
npm install erine
```

Ejemplo del index.js

```js
const { ErineClient } = require("erine"); ///Definimos el cleint

const client = new ErineClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    prefix: async function(d) {
        let prefix = await db.get(`prefix_${d.guild.id}`);
        return prefix || '?' // Prefix con DB
    }
});

/////////////DB

const db = new Database({
    path: "database",
    tables: ["main", "usuarios"]
})
db.on('ready', () => {
    console.log('Base de datos conectado correctamente')
})
db.start()
exports.db = db

//Handler

client.load_commands('./comandos')
client.load_events('./events')

////

client.login(""); ///Token de tu bot
```
