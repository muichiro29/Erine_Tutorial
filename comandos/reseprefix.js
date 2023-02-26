const { HybridBuilder } = require("erine");
const { db } = require("../../index.js");
const body = {
    data: new HybridBuilder()
    .setName('reset-prefix')
    .setDescription('Restablecer el prefix de este servidor'),
    async code(d) {
       
        await db.delete(`prefix_${d.guild.id}`, "main")
        await d.send(`El prefix del servidor fue establecido usa \`?help\` para ver mis comandos `)
    }
}

module.exports = { body }