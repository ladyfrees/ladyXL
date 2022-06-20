const Discord = require('discord.js');

module.exports = {

    name: "8ball",
    aliases: ['ball'],

    run: async(client, message, args) => {

        var respostas = [ //Coloque as resposta entre esses "[]"
        'si', 'no', '¿lo es?', 'tal vez', 'tu papa',
        'lárgate', '¡déjame en paz!', 'seguro', 'absolutamente seguro',
        '¡vete a follar con otro!', 'calla me dormido!', 'hey bb ', 'oh donde?',
        '¿Quién sabe?', 'Esto es un misterio...', 'Claro que no', 'Claro que no',
        'NUNCA', 'no te lo puedo decir', 'pregúnta eso en el puesto de tilin'

        ]

        if (!args[0]) return message.reply(`¿Cómo voy a responder sin una pregunta? ? 🤨`)
        if(args[0].length < 1) return message.channel.send("tienes que hacer una pregunta")

        let y = respostas[Math.floor(respostas.length * Math.random())]

        message.reply(`${y}`)

    }


}