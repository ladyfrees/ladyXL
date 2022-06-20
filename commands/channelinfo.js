const { MessageEmbed } = require("discord.js")
const moment = require('moment') // npm i moment
moment.locale('es-CO')

module.exports = {
    name: 'channelinfo',
    aliases: ["channel-info", "ci"],

    run: async (client, message, args) => {
        var channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel
        if(!channel) return message.reply("**<:noentry:921415736566636575> | Canal no identificado! Asegúrate de usar una identificación válida o mencionar un canal existente. **")

        let embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('información del canal:')
        .setFields(
            {
                name: 'Nombre:',
                value: `\`${channel.name}\``,
                inline: true
            },
            {
                name: 'ID:',
                value: `\`${channel.id}\``,
                inline: true
            },
            {
                name: 'Mencion',
                value: `\`<#${channel.id}>\``,
                inline: true
            },
            {
                name: 'tipo de canal:',
                value: `\`${channelType()}\``,
                inline: true
            },
            {
                name: 'NSFW:',
                value: `\`${channel.nsfw ? "Si" : "No"}\``,
                inline: true
            },
            {
                name: 'Categoria:',
                value: `\`${channel.parent == null ? 'Ninguna categoría seleccionada' : channel.parent.name}\``,
                inline: true
            },
            {
                name: 'creado en:',
                value: `\`${moment(channel.createdAt).format('LL')}, a las ${moment(channel.createdAt).format('LT')}\``,
                inline: true
            }
        )
        message.reply({embeds: [embed]})

        function channelType() {
            let types = {
                GUILD_TEXT: 'Canal de texto',
                GUILD_VOICE: 'Canal de voz',
                GUILD_CATEGORY: 'Categoria',
                GUILD_NEWS: 'canal de noticias',
                GUILD_NEWS_THREAD: `Canal de noticias (hilo)`,
                GUILD_PUBLIC_THREAD: `hilo público`,
                GUILD_PRIVATE_THREAD: `hilo privado`,
                GUILD_STAGE_VOICE: `Escenario`,
                UNKNOWN: `Desconocido`
            }

        let c = types[channel.type]
        return c
        }
    }
}

/*
Feito com carinho pelo TheAnonimooo
*/