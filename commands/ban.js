const Discord = require("discord.js")

module.exports = {
    name: "ban",
    aliases: ["banir"], 

    run: async(client, message, args) => {

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.reply(`No tiene permiso para usar este comando.`)
        } else {

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            let motivo = args[1];

            if (!motivo) motivo = "No definido.";

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`!ban [miembro] [motivo]\``);

                message.reply({ embeds: [embed] })

            } else {

                    user.ban({ reason: motivo }).then(() => message.reply(`El usuario \`${user.user.tag}\` fue prohibido con éxito.`)).catch(e => {
                        message.reply(`No se puede banear al usuario \`${user.user.tag}\`.`)
                    })
                    
            }
        }
        
    }
}