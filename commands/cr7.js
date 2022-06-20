const jimp = require("jimp")
const Discord = require('discord.js')
const ms = require("ms")

module.exports = {
    name: "cr7",
    aliases: ["cr7placa"],

    run: async(client, message, args) => {


        let img = jimp.read("https://media.discordapp.net/attachments/927803600707682394/945122188657319996/cristiano_ronaldo_efe_festejo_polxmico.jpg_242310155.png?width=767&height=473")
        if (!args[0]) return message.reply("**Escribe un mensaje para que Cr7 hable !**")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 260, 270, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.reply({files: [{ attachment: i, name: "cr7.png****"}]}).then (msg => {
                        msg.react("⚽")
                    })
                })
            })
        })
  }
}
// By: AlphaJR. Dev ϟ#1351
    // By: AlphaJR. Dev ϟ#1351
        // By: AlphaJR. Dev ϟ#1351
            // By: AlphaJR. Dev ϟ#1351
                // By: AlphaJR. Dev ϟ#1351
                    // By: AlphaJR. Dev ϟ#1351  // By: AlphaJR. Dev ϟ#1351  // By: AlphaJR. Dev ϟ#1351  // By: AlphaJR. Dev ϟ#1351  // By: AlphaJR. Dev ϟ#1351  // By: AlphaJR. Dev ϟ#1351
                // By: AlphaJR. Dev ϟ#1351
            // By: AlphaJR. Dev ϟ#1351
        // By: AlphaJR. Dev ϟ#1351
    // By: AlphaJR. Dev ϟ#1351
// By: AlphaJR. Dev ϟ#1351