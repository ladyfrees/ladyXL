const Discord = require("discord.js")

module.exports = {
    name: 'hug', 
    aliases: ["abrazar"],

    run: async(client, message, args) => {


        var list = [
            'https://media.discordapp.net/attachments/987839804907593781/988303707470962738/e21d3ac73ee847480b7469055c08c3f7.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988303708049772544/dbfaa164677f874b8e925a1b49798f1a.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988303708561502278/b4c5552b3729f1e985cf5505ba407204.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988303708947361812/b709d74c74cf2375edfeb3a17dda670d.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988303709404553226/cc5e9b8648099c176fefd87328bf5267.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988303709895290930/8e5fef0cba3e77cb75dddb56ecb8d40d.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988306461643927592/8941241f90ac4874da4a25e84c18f031.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988306461924950016/37493a807c6ebd588892c2d0282c8e4c.jpg'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`<:x:975113814745952367> | ${message.author} Menciona a alguien.`)
        if(user.id === message.author.id) return message.reply(`<:x:975113814745952367> | ${message.author} No puedes abrazar.`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`💓 ${message.author} abrazo a ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}