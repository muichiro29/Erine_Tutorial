const { ErineClient } = require("erine");
const { Database } = require("midb");

// importamos nuestra clase

const client = new ErineClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    prefix: async function(d) {
        let prefix = await db.get(`prefix_${d.guild.id}`);
        return prefix || '?'
    }
});

/////////////

const db = new Database({
    path: "database",
    tables: ["main", "usuarios"]
})
db.on('ready', () => {
    console.log('Base de datos conectado correctamente')
})
db.start()
exports.db = db

//////////////
//Handler

client.load_commands('./comandos')
client.load_events('./events')

////










client.login("MTA2OTQyMDMzODM4NTAwMjYyNw.GCSnjH.bsBQppWLnP1KDIKGfxi61YnH7Jyc8367KiCzQs")