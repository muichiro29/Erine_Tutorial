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

client.login("TOKEN")
