const Discord = require("discord.js")

module.exports = {
    name: "dm", // Coloque o nome do comando do arquivo
    aliases: ["pv"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("SEND_MESSAGES")) {
            message.reply(`Necesitas tener permiso de \`Administrador\`.`)
        } else {
            let user = message.mentions.users.first() || client.users.cache.get(args[0]);
            let dm_msg = args.slice(1).join(" ");
            if (!user || !args[1]) {
                message.reply({ embeds: [
                    new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`\`!dm [usuário] [mensaje]\``)
                ] })
            } else {
                    message.reply({ content: `El mensaje fue enviado con éxito a \`${user.tag}\`.`, embeds: [
                        new Discord.MessageEmbed()
                        .setTitle(`Mensaje:`)
                        .setDescription(`||\n${dm_msg}\n||`)
                    ] }).then(m => {
                        user.send(dm_msg).catch(e => {m.edit({ content: `\\❌ ¡Ups! el dm del usuario \`${user.tag}\` está bloqueado!`, embeds: [
                            new Discord.MessageEmbed()
                            .setTitle(`Mensaje que se enviaría:`)
                            .setDescription(`||\n${dm_msg}\n||`)
                        ] })})
                    })
                    
                }
            }  
        
    }
}