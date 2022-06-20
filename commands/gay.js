const Discord = require("discord.js");
const Canvas = require("canvas")

module.exports = {
    name: "gay",
    aliases: ["gay"],

    run: async (client, message, args) => {

const canvas = Canvas.createCanvas( 1000, 1000)
    const ctx = canvas.getContext("2d")

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let porcentagem = Math.floor(Math.random() * 100);
      
if (user.bot)return message.reply(`¿Dónde se ha visto que el bot tiene un perfil osea no me hicieron con orrientacion?`)

const avatar = await   Canvas.loadImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height)

if(porcentagem < 30)  {
const layout = await   Canvas.loadImage("https://i.imgur.com/5ajxIva.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
}      
if(porcentagem > 30)  {
const layout = await   Canvas.loadImage("https://cdn.discordapp.com/attachments/987839804907593781/988478487826419862/imagen_2022-06-20_111659807.png")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
}
if(porcentagem > 60)  {
const layout = await   Canvas.loadImage("https://cdn.discordapp.com/attachments/987839804907593781/988475425439223808/imagen_2022-06-20_110348065.png ")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)
      }
      
ctx.font = '100px Impact';
ctx.fillStyle = '#F8F8F8';
ctx.fillText(`${porcentagem}%`, 40, 900)

      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'gay.png')

        return message.channel.send({content: `${message.author}`, files: [attachment]})
        
      
    }
}