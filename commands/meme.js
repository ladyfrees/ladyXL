const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "meme",
    description: "Mostrar memes aleatorios en español.",
    run: async (client, message, args) => {
      
const url = `https://api-20.javascriptsz.repl.co/`;
     
response = await axios.get(url);
data = response.data;
let imagem = data.image[Math.floor(Math.random() * data.image.length)]

       let embed = new MessageEmbed() 
          .setImage(imagem)
           message.reply({embeds: [embed]})
  
    }
}