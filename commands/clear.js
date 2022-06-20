const { Client, Message, MessageEmbed, DiscordAPIError} = require('discord.js');
 
 
 
module.exports = {
 
    name: 'clear',
    aliases: ['limpar chat'],
 
 
 
    run: async (client, message, args) => {
 
        let clearchannel = message.guild.channels.cache.get("867045164542590976");
 
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`${message.author} **NO TIENE PERMISO PARA UTILIZAR ESTE COMANDO**`)
 
 
 
        try {
 
            let delamount = args[0];
 
            let msg_del = parseInt(delamount) + 1
 
 
 
            let incomplet = new MessageEmbed()
 
            .setTitle(`🧹 | BORRAR MENSAJES`)
 
            .setColor("RED")
 
            .setDescription(`**\n📋 | DESCRIPCIÓN: Use este comando para borrar el chat.\n\n❓ | ¿A QUIÉN UTILIZO? USAR ASÍ: l!clear (mensajes) \n\n📜 | Ejemplo: l!clear 10**`)
 
            if (isNaN(delamount) || parseInt(delamount <= 0)) return message.reply({embeds: [incomplet]})
 
 
 
            if (parseInt(delamount) > 99) return message.reply('❌ | **¡Solo puedes borrar de 1 a 99 mensajes!**')
 
 
 
            await message.channel.bulkDelete(parseInt(delamount) + 1, true);
 
 
 
            let clear = new MessageEmbed()
 
            .setTitle(`🧹 | CLEAR`)
 
            .setColor("WHITE")
 
            .setThumbnail(``) 
 
            .setDescription(`**> 🧹 | Haz limpiado ${delamount} mensajes en  ${message.channel}.\n\n> 🎓 | lo limpio: ${message.author}**`)    
 
            if (!clearchannel) {
                return message.channel.send("**:x: |NO ENCUENTRO EL CANAL BORRAR LOGS. **");
            }
    
            clearchannel.send({ embeds: [clear] });
 
 
 
        } catch (e) {
 
            console.log(e)
 
        }
 
 
    }

} 

 