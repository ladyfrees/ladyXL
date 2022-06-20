const Discord = require("discord.js")

module.exports = {
    name: 'kiss',
    aliases: ["besar", "k"],

    run: async(client, message, args) => {


        var list = [
            'https://i.pinimg.com/564x/8a/c9/5c/8ac95c2e6a2f0985dd0f961ce62d10fd.jpg',
            'https://i.redd.it/y7b10h9ikzu41.jpg',
            'https://i.pinimg.com/564x/d9/16/b0/d916b0ad765fa2490b885ca50730aa70.jpg',
            'https://dthezntil550i.cloudfront.net/cg/latest/cg2012110532435350011636526/1280_960/e0ad4454-50ab-486e-a734-ebd01da54221.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988233013487890482/40e4ebbc631e78486db7ce1da4708980.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988305654584340490/e40cfbaf2c87b591e18f5185468d34b1.jpg',
            'https://cdn.discordapp.com/attachments/987839804907593781/988307304422203412/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988307378925608960/unknown.png',
            'https://cdn.discordapp.com/attachments/987839804907593781/988307513113997333/unknown.png'
          ];
    
        
        var rand = list[Math.floor(Math.random() * list.length)];
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
        if(!args[0]) return message.reply(`<:x:975113814745952367> | ${message.author} Menciona a alguien.!`)
        if(user.id === message.author.id) return message.reply(`<:erro:975113814745952367> | ${message.author} no puedes besar.`)
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`💓 ${message.author} beso a ${user}!`)
        .setImage(rand)

        message.channel.send({ embeds: [embed]})
    }
}