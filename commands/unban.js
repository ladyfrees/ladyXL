const Discord = require("discord.js")

module.exports = {
    name: "unban",
    aliases: ["desbaniar"],

    run: async(client, message, args) => {

        if (!message.member.permissions.has("BAN_MEMBERS")) {
            message.reply(`No tiene permiso para usar este comando.`)
        } else {

            let user = client.users.cache.get(args[0])

            if (!user) {

                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription(`\`!unban [miembro]\``);

                message.reply({ embeds: [embed] })

            } else {

                    message.guild.members.unban(user.id).then(() => message.reply(`El usuario \`${user.tag}\` fue desbaneado con éxito.`)).catch(e => {
                        message.reply(`No se puede desbanear al usuario \`${user.tag}\`.`)
                    })
                    
            }
        }
        
    }
}