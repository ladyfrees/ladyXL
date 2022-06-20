const Discord = require("discord.js")

module.exports = {
    name: "serverinfo", 
    aliases: [""], 

    run: async(client, message, args) => {

        let membros = message.guild.memberCount;
        let cargos = message.guild.roles.cache.size;
        let canais = message.guild.channels.cache.size;
        let servidor = message.guild;

        let chats = message.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size;
        let calls = message.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size;

        let emojis = message.guild.emojis.cache.size;
        let dono_id = message.guild.ownerId;
        let dono = message.guild.members.cache.get(dono_id);
        let impulsos = message.guild.premiumSubscriptionCount;
        let data = message.guild.createdAt.toLocaleDateString("pt-br");

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.guild.name}`)
        .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
        .addFields(
            {
                name: `> \\📌 Principal:`,
                value: `Dueño: ${dono}\nMiembros: \`${membros + 1}\`\nImpulsos: \`${impulsos}\`\nID: \`${servidor.id}\``,
                inline: false
            },
            {
                name: `> \\💬 Canales:`,
                value: `Geral: \`${canais}\`\nChats: \`${chats}\`\nCalls: \`${calls}\``,
                inline: false
            },
            {
                name: `> \\💼 Posiciones:`,
                value: `\`${cargos}\``,
                inline: true
            },
            {
                name: `\\😎 Emojis:`,
                value: `\`${emojis}\``,
                inline: true
            },
            {
                name: `> \\📅 Fecha de creación:`,
                value: `\`${data}\``,
                inline: false
            },
        );

        message.reply({ embeds: [embed] })

       
        
    }
}