const jimp = require("jimp")
const Discord = require('discord.js')
const ms = require("ms")

module.exports = {
    name: "neymar",
    aliases: ["neymarplaca"],

    run: async(client, message, args) => {


        let img = jimp.read("https://media.discordapp.net/attachments/927803600707682394/945131756200275968/31442443.png?width=710&height=473")
        if (!args[0]) return message.reply("**Escribe un mensaje para que Neymar hable !**")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 145, 330, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.reply({files: [{ attachment: i, name: "neymar.png****"}]}).then (msg => {
                        msg.react("⚽")
                    })
                })
            })
        })
  }
}