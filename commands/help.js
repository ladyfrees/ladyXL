const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "help,",
    aliases: "p",

    run: async(client, message, args) => {

        let embed_1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Hola ${message.author}, ver mis comandos con el menú a continuación:**`);

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('ver mis comandos.') // Mensagem estampada
        .addOptions([
               {
                    label: 'Panel inicial',
                    description: 'Solo panel de inicio de mensajes',
                    emoji: '📓',
                    value: 'Panel inicial',
               },
                {
                    label: 'Utilidades',
                    description: 'Ver mis comandos de utilidad',
                    emoji:  '1️⃣',
                    value: 'Utilidades',
                },
                {
                    label: 'Moderacion',
                    description: 'Ver mis comandos de moderacion',
                    emoji: '2️⃣',
                    value: 'Moderacion',
                },
                {
                    label: 'Diversion',
                    description: 'Ver mis comandos de diversion',
                    emoji: '3️⃣',
                    value: 'Diversion',
                },
                {
                    label: 'Interracion',
                    description: 'Ver mis comandos de interracion ',
                    emoji: '4️⃣',
                    value: 'Interracion',
                },
                {
                    label: 'Juegos',
                    description: 'Ver mis comandos de juegos ',
                    emoji: '5️⃣',
                    value: 'Juegos',
                },
                {
                    label: 'Otros',
                    description: 'Ver mas comandos ',
                    emoji: '6️⃣',
                    value: 'Otros',
                },
                {
                    label: 'Cambios',
                    description: 'Ver mis cambios ',
                    emoji: '💫',
                    value: 'Cambios',
                },
            ])

        );


        message.reply({ content: `${message.author}`, embeds: [embed_1], components: [painel] }).then(msg => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = msg.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        if (valor === 'Panel inicial') {

             msg.edit({ content: `${message.author}`, embeds: [embed_1], components: [painel] });
    
        };
        
        if (valor === 'Utilidades') {

            let embed_2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, ver mis comandos de \`utilidades\` abajo:\n\`\`\`userinfo,serverinfo,emojiinfo,botinfo,channelinfo,roleinfo\`\`\`**`);

            msg.edit({ content: `${message.author}`, embeds: [embed_2], components: [painel] });

        };

        if (valor === 'Moderacion') {

            let embed_3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, ver mi comandos de \`moderacion\` abajo:\n\`\`\`ban,unban,kick,lock,unlock,mute,clear\`\`\`**`);

            msg.edit({ content: `${message.author}`, embeds: [embed_3], components: [painel] });

        };

        if (valor === 'Diversion') {

            let embed_4 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, ver mis comandos de \`diversion\` abajo:\n\`\`\`say,dm,8ball,ping,ship,buscar,cr7,meme,neymar,gay\`\`\`**`);

            msg.edit({ content: `${message.author}`, embeds: [embed_4], components: [painel] });
        
        };

        if (valor === 'Interracion') {

            let embed_5 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, mira los \`comandos\` de interracion:\n\`\`\`hug,kiss,slap,pat\`\`\`**`);
    
            msg.edit({ content: `${message.author}`, embeds: [embed_5], components: [painel] });
    
        };

        if (valor === 'Juegos') {

            let embed_8 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, mira los comandos de \`Juegos\` abajo:\n\`\`\`coinflip,snake,dado\`\`\`**`);

            msg.edit({ content: `${message.author}`, embeds: [embed_8], components: [painel] });

        };

        if (valor === 'Otros') {

            let embed_6 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, mira los \`otros\` comandos abajo:\n\`\`\`ticket,close,trace,uptime\`\`\`**`);

            msg.edit({ content: `${message.author}`, embeds: [embed_6], components: [painel] });

        };

        if (valor === 'Cambios') {

            let embed_7 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`**Hola ${message.author}, mira los \`Cambios\` del bot:\n\`\`\`Nuevos comandos de channelinfo y roleinfo,Nuevo comando de moderacion (clear),se ha eliminado el comando (mute)\`\`\`**`);
    
            msg.edit({ content: `${message.author}`, embeds: [embed_7], components: [painel] });
    
        };
        
        })

    })

}
}