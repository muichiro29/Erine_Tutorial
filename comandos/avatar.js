const { HybridBuilder, ParamsBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js")

const body = {
    data: new HybridBuilder()
    .setName('avatar')
    .setDescription('Mira el avatar de un usuario'),
    params: new ParamsBuilder()
    .addMember({
        name: 'usuario',
        description: 'Menciona a una usuario',
        required: false,
    }),
    async code(d) {

        let usuario = d.get("usuario")?.user || d.author
        let avatar = new EmbedBuilder()
        .setImage(usuario.displayAvatarURL({ dynamic: true, size: 1024}))
        .setColor("Random")
        d.send({ embeds: [avatar] })
    }
}

module.exports = { body }