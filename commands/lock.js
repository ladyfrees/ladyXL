const Discord = require("discord.js")

module.exports = {
    name: "lock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`no tienes el permiso \`gestionar canales\` para poder usar este comando.`)
        } else {
            
            message.reply(`✅ Este chat ha sido bloqueado con éxito.`).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false }).catch(e => {
                console.log(e)
                msg.edit(`❌ Vaya, algo salió mal al intentar bloquear este chat.`)
            })
        })

            }
        }        
}
