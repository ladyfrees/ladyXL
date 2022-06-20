const Discord = require("discord.js")

module.exports = {
    name: "emojiinfo", 
    aliases: ["emoji"], 

    run: async (client, message, args) => {

        let emoji = client.emojis.cache.find(emoji => `<:${emoji.name}:${emoji.id}>` === args[0]) || client.emojis.cache.find(emoji => emoji.name === args[0]) || client.emojis.cache.get(args[0]);

        if (!emoji) {
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`\`!emojiinfo [emoji | nombre | id]\``)
                ]
            });
        } else if (emoji) {

            try {

            if (!emoji.animated) {

                let img = `https://cdn.discordapp.com/emojis/${emoji.id}.png?size=2048`;
                let botao = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setStyle("LINK")
                            .setLabel("Descargar")
                            .setEmoji("📎")
                            .setURL(img)
                    );

                    let embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Información de emojis:")
                    .setThumbnail(`${img}`)
                    .addFields(
                        {
                            name: `> \📝 Nombre de emojis:`,
                            value: `\`${emoji.name}\``,
                            inline: false
                        },
                        {
                            name: `> \🆔 ID de emoji:`,
                            value: `\`${emoji.id}\``,
                            inline: false
                        },
                        {
                            name: `> \🧿 Mención de emoji:`,
                            value: `\`${emoji}\``,
                            inline: false
                        },
                        {
                            name: `> \🖼 El emoji es:`,
                            value: `\`Imagem (png/jpg)\``,
                            inline: false
                        }
                    );

                    message.reply({ embeds: [embed], components: [botao] })
            } 

            else if (emoji.animated) {

                    let img = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?size=2048`;
                    let botao = new Discord.MessageActionRow()
                        .addComponents(
                            new Discord.MessageButton()
                                .setStyle("LINK")
                                .setLabel("Descargar")
                                .setEmoji("📎")
                                .setURL(`${img}`)
                        );
    
                        let embed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle("Informacion de emojis:")
                        .setThumbnail(img)
                        .addFields(
                            {
                                name: `> \📝 Nombre de emoji:`,
                                value: `\`${emoji.name}\``,
                                inline: false
                            },
                            {
                                name: `> \🆔 ID de emoji:`,
                                value: `\`${emoji.id}\``,
                                inline: false
                            },
                            {
                                name: `> \🧿 Mencion de emoji:`,
                                value: `\`${emoji}\``,
                                inline: false
                            },
                            {
                                name: `> \🖼 El emoji es:`,
                                value: `\`Gif\``,
                                inline: false
                            }
                        );

                        message.reply({ embeds: [embed], components: [botao] })

            }

        } catch (e) { 
            message.reply(`${message.author} Ups! No pude identificar el emoji.`)
        }

        }

    }
}