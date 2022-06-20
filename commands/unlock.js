const Discord = require("discord.js")

module.exports = {
    name: "unlock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`no tienes el permiso \`gestionar canales\` para poder usar este comando.`)
        } else {
            
            message.reply(`✅ Este chat ha sido desbloqueado con éxito.`).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true }).catch(e => {
                console.log(e)
                msg.edit(`❌ Vaya, algo salió mal al intentar desbloquear este chat.`)
            })
        })

            }
        }        
}
