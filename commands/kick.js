const Discord = require("discord.js")

module.exports = {
    name: "kick", 
    aliases: ["expulsar"], 

    run: async(client, message, args) => {

        if (!message.member.permissions.has("KICK_MEMBERS")) {
            message.reply(`No tiene permiso para usar este comando.`)
        } else {

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let motivo = args[1];

            if (!motivo) motivo = "No definido.";

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`!kick [miembro] [motivo]\``);

                message.reply({ embeds: [embed] })

            } else {

                    user.kick(motivo).then(() => message.reply(`El usuario \`${user.user.tag}\` fue expulsado con éxito.`)).catch(e => {
                        message.reply(`No se puede expulsar al usuario \`${user.user.tag}\`.`)
                    })
                    
            }
        }
        
    }
}