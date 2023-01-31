const { HybridBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName('ping')
    .setAliases('pong')
    .setDescription('Mi latencia'),
    async code(d) {
        const ping = Math.floor(d.bot.ws.ping)
        await d.send( `Mi latencia es de ${ping}`)
    }
}

module.exports = { body }