const { HybridBuilder, ParamsBuilder } = require("erine");
const { EmbedBuilder } = require("discord.js");
const { db } = require("../../index.js");
const body = {
    data: new HybridBuilder()
    .setName('setprefix')
    .setDescription('Custom prefix'),
    params: new ParamsBuilder()
    .addString({
        name: 'prefix',
        description: 'Prefix para tu bot',
        required: true
    }),
    async code(d) {
       
        let param = d.get('prefix')
        let icono = d.guild.iconURL() || d.bot.user.displayAvatarURL()

        if(param.length >= 6) return d.send({content: "El prefix es muy largo", ephemeral: true });
        await db.set(`prefix_${d.guild.id}`, param)

        let prefix_send = new EmbedBuilder()
        .setAuthor({
            name: `Custom prefix`,
            iconURL: icono
        })
        .setDescription(`Mi nuevo prefix en este servidor es \`${param}\`, ¡Ahora usa \`${param}help\``)
        .setTimestamp()
        .setColor('Green')

        await d.send({ embeds: [prefix_send] })
    }
}

module.exports = { body }