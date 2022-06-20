const Discord = require("discord.js");

module.exports = {
    name: "dado", // Coloque o nome do comando do arquivo

    run: async(client, message, args) => {


    let caiu =
        Math.floor(Math.random() * 9)
        + 1;

    let embed1 = new Discord.MessageEmbed()
        .setTitle(`Ha ganado !`)
        .setColor('RANDOM')
        .setDescription(`**los dados cayeron ${caiu} ¡Tú y tú Ganaste!**`)
        .setFooter(`AlphaJR. & Retuurnf`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

    let embed2 = new Discord.MessageEmbed()
        .setTitle(`Perdió !`)
        .setColor('RANDOM')
        .setDescription(`**🎲 | los dados cayeron ${caiu} ¡y perdiste!**`)
        .setFooter(`AlphaJR. & Retuurnf`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()



    if (caiu == 8) {
        message.reply({ embeds: [embed1] })
        return;
    }

    else {
        message.reply({ embeds: [embed2] })

    }
}
}