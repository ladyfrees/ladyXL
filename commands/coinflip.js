const Discord = require("discord.js")

module.exports = {
    name: "coinflip", 
    aliases: [""],

    run: async(client, message, args) => {

        let lados = ["cara", "cruz"];
        let resposta = lados[Math.floor(Math.random() * lados.length)];

        if (!args[0] || args[0] !== "cara" && args[0] !== "cruz") {
            message.reply({ embeds: [
                new Discord.MessageEmbed()
                .setColor("00001")
                .setDescription(`\`!coinflip [cara/coroa]\``)
            ]})
        } else {
            message.reply(`💱 **Tirando la moneda hacia arriba...**`).then(msg => {

                setTimeout( () => {

            if (resposta === "cara") {

                if (args[0] === "cara") {      
                msg.edit(`💱 **Cara**! Felicidades ${message.author}, ¡ganaste!`)
                } else if (args[0] === "cruz") {
                    msg.edit(`💱 **Cara**! ${message.author} ¡Gané esta vez!`)
                }

            } else if (resposta === "cruz") {

                if (args[0] === "cruz") {      
                    msg.edit(`💱 **Cruz**! Felicidades ${message.author}, ¡ganaste!`)
                    } else if (args[0] === "cara") {
                        msg.edit(`💱 **Cruz**! ${message.author} ¡Gané esta vez!`)
                    }

            }

        }, 2000)

        })

        }

       
        
    }
}