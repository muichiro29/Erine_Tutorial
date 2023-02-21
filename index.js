const { ErineClient } = require("erine");

// importamos nuestra clase

const client = new ErineClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    prefix: "?"
});

//Handler

client.load_commands('./comandos')
client.load_events('./events')

////

client.login("MTA2OTQyMDMzODM4NTAwMjYyNw.GdLKdO.MK5IDSHDnw5uVprpHzUXSnT7VGNKbPW7szG3n4")