const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "random", 
  alias: [], 

    run: async(client, message, args) => {

  const random = message.guild.members.cache.random()


  const embed = new Discord.MessageEmbed()
  
    .setThumbnail(random.displayAvatarURL({ size: 300, dynamic: true}))
    .setDescription(`Usuario: **${random.user.tag}**\nID: **${random.id}**`) 
    .addField('**Union al servidor:**', `<t:${(Number(random.joinedAt) / 1000).toFixed(0)}:D>`)
    .setColor("RANDOM")

  message.channel.send({ embeds: [embed] })
  

 }

}