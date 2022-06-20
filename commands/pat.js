const Discord = require("discord.js")

module.exports = {
    name: 'pat',  
    aliases: ["acariciar"],

    run: async(client, message, args) => {


        var list = [
            'https://cdn.discordapp.com/attachments/987839804907593781/988309251086774302/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309280161669200/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309334914125834/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309368925728808/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309399481225246/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309488673120376/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309821432401990/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988309873181741126/unknown.png'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`<:x:975113814745952367> | ${message.author} Menciona a un usuario.`)
        if(user.id === message.author.id) return message.reply(`<:x:975113814745952367> | ${message.author} no puedes acariciarte a ti mismo`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`🔥 ${message.author} acaricio a ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}