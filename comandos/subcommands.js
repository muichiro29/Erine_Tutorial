const { HybridGroup, HybridBuilder, ParamsBuilder } = require('erine');

const body = {
    data: new HybridGroup()
            .setName('bot')
            .setDescription('Informarcion del bot')
    .addCommand({
        data: new HybridBuilder()
        .setName('ping')
        .setAliases('pong')
        .setDescription('Mi latencia'),
    async code(d) {
        const ping = Math.floor(d.bot.ws.ping)
        await d.send( `Mi latencia es de ${ping}`)
        }
        })


    //cada .addCommad({...}) sera un nuevo subcommads 
    .addCommand({
        data: new HybridBuilder()
    .setName('say')
    .setDescription('Envio tu mensaje'),
    params: new ParamsBuilder()
        .addString({
            name: 'mensaje',
            description: 'escribe tu mensaje',
            required: true
        }),
        async code(d) {
            let msg = d.get('mensaje');

            await d.send(msg);
        }
    })

    //cada .addCommad({...}) sera un nuevo subcommads 


}

module.exports = { body }
