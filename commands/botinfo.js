const Discord = require("discord.js")

module.exports = {
    name: "botinfo", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        let servidor = client.guilds.cache.size;
        let usuarios = client.users.cache.size;
        let canales = client.channels.cache.size;
        let ping = client.ws.ping;
        let dueño_id = "951112564299939861";
        let dueño = client.users.cache.get(dueño_id);
        let prefix = "l!";
        let version = "^13.6.0";

        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp(new Date)
            .setDescription(`\\👋 Hola ${message.author}, soy el \`${client.user.username}\`, mi prefix es \`${prefix}\`.\n\\💻 lo puedes usar para mis comandos \`${prefix}help\`.
\\🎈  Actualemnte estoy en \`${servidor}\` servidores, \`${usuarios}\` usuarios y \`${canales}\` canales de servidor.
\\📡 Mi ping esta en \`${ping}\`.
\\🤖 Fui creado por \`${dueño.tag}\`, en lenguaje JavaScript, usando NodeJs y la librería Discord.Js en la versión \`${version}\`.`);

        message.reply({ embeds: [embed] })



    }
}