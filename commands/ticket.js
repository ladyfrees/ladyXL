const Discord = require("discord.js");
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    name: "ticket",
    author: "ferinha",

    run: async(client, message, args) => { //await

        let confirmando_sistema = db.get(`sistema_de_tickets_por_ferinha_${message.guild.id}`);

        if (confirmando_sistema === null || false) return message.reply(`El sistema de tickets es \`desativado\`!`);

        let canal_ticket = message.guild.channels.cache.find(ticket_por_ferinha => ticket_por_ferinha.name === `${message.author.id}`);

        if (canal_ticket) return message.reply(`Ya tienes un ticket abierto en ${canal_ticket}.`);

        let embed_1 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} ¡Bienvenido a tu tickets!`);

        let embed_2 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} ¿Quieres abrir un ticket?`);

        let embed_3 = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setDescription(`${message.author} Su ticket ha sido cancelado.`);

        message.reply({ embeds: [embed_2] }).then(msg => {

            let emoji_sim = "✅"; // Coloque o emoji
            let nome_emoji_sim = "✅"; // Coloque o nome do emoji

            let emoji_nao = "❌"; // Coloque o emoji
            let nome_emoji_nao = "❌"; // Coloque o nome do emoji

            msg.react(emoji_sim)
            msg.react(emoji_nao)

            let filtro_1 = (emoji_ferinha, user_ferinha) => emoji_ferinha.emoji.name === nome_emoji_sim && user_ferinha.id === message.author.id; // Confirma
            let coletor_1 = msg.createReactionCollector({filter: filtro_1}); // Confirma

            let filtro_2 = (emoji_ferinha, user_ferinha) => emoji_ferinha.emoji.name === nome_emoji_nao && user_ferinha.id === message.author.id; // Desconfirma
            let coletor_2 = msg.createReactionCollector({filter: filtro_2}); // Desconfirma

            coletor_1.on("collect", async () => {

                msg.delete();

                /*let comando_feito_por_ferinha = await*/ message.guild.channels.create(`${message.author.id}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : message.author.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_ferinha) => {
        
                    chat_ferinha.send({ embeds: [embed_1] });
        
                    let ferinha_1 = await message.reply(`Tu ticket fue creado en ${chat_ferinha}.`);
        
                    setTimeout( () => {
                        ferinha_1.delete()
                        message.delete();
                    }, 6000);  
        
                });

            });

            coletor_2.on("collect", async () => {

                msg.delete();

                let ferinha_2 = await message.reply({ embeds: [embed_3] });

                setTimeout( () => {
                    ferinha_2.delete();
                    message.delete();
                }, 6000); 
            });
            
        })

    }
}