const Discord = require("discord.js");
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    name: "tickets",
    author: "ferinha",

    run: async(client, message, args) => {

        //let confirmando_sistema = db.get(`sistema_de_tickets_por_ferinha_${message.guild.id}`);

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`Você não possui permissão para utilizar este comando.`);
        //if (confirmando_sistema === "Ativado") return message.reply(`O sistema já está \`ativado\`!`);
        
        let embed_1 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} ¿Quieres activar el sistema de ticketing?`);

        let embed_2 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} El sistema de boletos fue \`activado\`!`);

        let embed_3 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} ¡El comando ha sido cancelado!`);

        let embed_4 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} El sistema de boletos fue \`desactivado\`!`);

        message.reply({ embeds: [embed_1] }).then(msg => {

            let emoji_sim = "✅"; // Coloque o emoji
            let nome_emoji_sim = "✅"; // Coloque o nome do emoji

            let emoji_nao = "❌"; // Coloque o emoji
            let nome_emoji_nao = "❌"; // Coloque o nome do emoji

            let emoji_lixeira = "🗑️"; // Coloque o emoji
            let nome_emoji_lixeira = "🗑️" // Coloque o nome do emoji

            msg.react(emoji_sim)
            msg.react(emoji_nao)
            msg.react(emoji_lixeira)

            let filtro_1 = (emoji_ferinha, user_ferinha) => emoji_ferinha.emoji.name === nome_emoji_sim && user_ferinha.id === message.author.id; // Confirma
            let coletor_1 = msg.createReactionCollector({filter: filtro_1}); // Confirma

            let filtro_2 = (emoji_ferinha, user_ferinha) => emoji_ferinha.emoji.name === nome_emoji_nao && user_ferinha.id === message.author.id; // Desconfirma
            let coletor_2 = msg.createReactionCollector({filter: filtro_2}); // Desconfirma

            let filtro_3 = (emoji_ferinha, user_ferinha) => emoji_ferinha.emoji.name === nome_emoji_lixeira && user_ferinha.id === message.author.id; // Lixeira
            let coletor_3 = msg.createReactionCollector({filter: filtro_3}); // Lixeira

            coletor_1.on("collect", () => {

                db.get(`sistema_de_tickets_por_ferinha_${message.guild.id}`, "Ativado");

                msg.delete();

                message.reply({ embeds: [embed_2] })

            });

            coletor_2.on("collect", () => {

                msg.delete();

                message.reply({ embeds: [embed_3] })
            });

            coletor_3.on("collect", () => {

                db.delete(`sistema_de_tickets_por_ferinha_${message.guild.id}`);

                msg.delete()

                message.reply({ embeds: [embed_4] })

            });

        })
    }
}
