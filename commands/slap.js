const Discord = require("discord.js")

module.exports = {
    name: 'slap', 
    author: "pedro", 
    aliases: ["tapa"],

    run: async(client, message, args) => {


        var list = [
            'https://i.imgur.com/fm49srQ.gif',
            'https://i.imgur.com/4MQkDKm.gif',
            'https://i.imgur.com/o2SJYUS.gif',
            'https://i.imgur.com/Agwwaj6.gif',
            'https://c.tenor.com/AzIExqZBjNoAAAAC/anime-slap.gif',
            'https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif',
            'https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif',
            'https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`<:x:975113814745952367> | ${message.author} Menciona a un usuaio.`)
        if(user.id === message.author.id) return message.reply(`<:x:975113814745952367> | ${message.author} no puedes vencerte a ti mismo`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`🔥 ${message.author} bofeteo a ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}