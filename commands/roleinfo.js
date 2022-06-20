const Discord = require("discord.js")
const {MessageEmbed} = require ("discord.js")
const moment = require("moment") // npm i moment
moment.locale('es-CO')

module.exports = {
    name: 'roleinfo',

run: async(client, message, args) => {
    let r = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    let g = message.guild
    if(!r) {
        return message.reply(`**:x: | Publicación no identificada! Mencione un título o use una identificación válida.**`)
}
    let embed = new MessageEmbed()
    .setColor(`${r.hexColor}`)
    .setTitle(`informacion del rol:`)
    .setFields(
        {
            name: `Nombre:`,
            value: `\`${r.name}\``,
            inline: true
        },
        {
            name: `ID:`,
            value: `\`${r.id}\``,
            inline: true
        },
        {
            name: `Mencion:`,
            value: `\`<@&${r.id}>\``,
            inline: true
        },
        {
            name: `color de rol:`,
            value: `\`${r.hexColor}\``,
            inline: true
        },
        {
            name: `Miembros:`,
            value: `\`${g.members.cache.filter(m => m.roles.cache.has(r.id)).size}\``,
            inline: true
        },
        {
            name: `Mencionable:`,
            value: `\`${r.mentionable ? 'Si' : 'No'}\``,
            inline: true
        },
        {
            name: `Creado en:`,
            value: `\`${moment(r.createdAt).format('LL')}, hace ${moment(r.createdAt).format('LT')}\``,
            inline: true
        },
        {
            name: `Se muestra por separado en la lista de miembros:`,
            value: `\`${r.hoist ? 'Si': 'No'}\``,
            inline: true
        },
        {
            name: `Posición: (arriba)`,
            value: `\`${r.position}/${g.roles.cache.size - 1}\``, // o -1 é para remover o @everyone
            inline: true
        },
        {
            name: `permisos:`,
            value: permissionsRole(),
            inline: false
        }
    )
    message.reply({embeds: [embed]})
    
    function permissionsRole() {
        const perms = {
            CREATE_INSTANT_INVITE: '\`Crear invitación instantánea\`',
            ADMINISTRADOR: '\`Administrador\`',
            KICK_MEMBERS: '\`Expulsar miembros\`',
            BAN_MEMBERS: '\`Prohibir miembros\`',
            MANAGE_CHANNELS: '\`Gestionar canales\`',
            MANAGE_GUILD: '\`Gestionar servidor\`',
            ADD_REACTIONS: '\`Añadir reacciones\`',
            VIEW_AUDIT_LOG: '\`Ver registro de auditoría\`',
            PRIORITY_SPEAKER: '\`Voz de prioridad\`',
            CORRIENTE: '\`En Vivo\`',
            VIEW_CHANNEL: '\`Ver canales\`',
            SEND_MESSAGES: '\`Enviar mensajes\`',
            SEND_TTS_MESSAGES: '\`Enviar mensajes en tts\`',
            MANAGE_MESSAGES: '\`Gestionar mensajes\`',
            EMBED_LINKS: '\`Enviar enlaces\`',
            ATTACH_FILES: '\`Enviar archivos adjuntos\`',
            READ_MESSAGE_HISTORY: '\`Ver historial de mensajes\`',
            MENTION_EVERYONE: '\`Mencionar a todos y roles\`',
            USE_EXTERNAL_EMOJIS: '\`Usar emoji externo\`',
            USE_EXTERNAL_STICKERS: '\`Usar pegatinas externas\`',
            VIEW_GUILD_INSIGHTS: '\`Ver análisis del servidor\`',
            CONECTAR: "\`Conectar a la llamada\`",
            HABLAR: `\`Hablar en llamadas\``,
            MUTE_MEMBERS: `\`Silenciar miembros\``,
            DEAFEN_MEMBERS: `\`Miembros sordos\``,
            MOVE_MEMBERS: `\`Mover miembros\``,
            USE_VAD: `\`Usar detección de voz\``,
            CHANGE_NICKNAME: `\`Cambiar apodo\``,
            MANAGE_NICKNAMES: `\`Administrar apodos\``,
            MANAGE_ROLES: `\`Gestionar roles\``,
            MANAGE_WEBHOOKS: `\`Gestionar webhooks\``,
            MANAGE_EMOJIS_AND_STICKERS: `\`Gestionar emojis y stickers\``,
            USE_APPLICATION_COMMANDS: `\`Usar comandos con barras inclinadas (/)\``,
            SOLICITUD_PARA_HABLAR: `\`Pide hablar\``,
            MANAGE_EVENTS: `\`Gestionar eventos\``,
            MANAGE_THREADS: `\`Gestionar hilos\``,
            CREATE_PUBLIC_THREADS: `\`Crear hilos públicos\``,
            CREATE_PRIVATE_THREADS: `\`Crear hilos privados\``,
            SEND_MESSAGES_IN_THREADS: `\`Hablar en hilos\``,
            START_EMBEDDED_ACTIVITIES: `\`Iniciar actividades\``,
            MODERATE_MEMBERS: `\`Gestionar la moderación del servidor\``
        }
        const permsArray = r.permissions.toArray().map(p => perms[p]) 

        if(r.permissions.toArray().includes('ADMINISTRATOR')) {
            return '\`Administrador (todas)\`'
        } else {
            if (permsArray.length === 0) {
                return 'Nenhum!'
            }
            let resultado = permsArray.join(", ")
            return resultado
        }
    }
}
}