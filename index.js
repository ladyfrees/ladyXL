const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 

client.login(config.token); 

client.once('ready', async () => {

    console.log("✅ - LadyBot esta sirviendo")

})

client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Error:' + err);
  }
  
    });

//presencia maldad kkk
client.on("ready", () => {
    const array = [
       {
         name: "l!help para ayudar",
         type: "PLAYING"
       },
       {
         name: `${client.guilds.cache.size} Servers || ${client.users.cache.size} Usuarios`,
         type: "PLAYING"
       },
      ]
  
      setInterval(() => {
         function presence(){
             client.user.setPresence({
               status: "online",
               activities: [array[Math.floor(Math.random() * array.length)]],
         });
       }
       presence();
     }, 5000);
  });

//anti errores
process.on('unhandledRejection', error => {
  console.error(error);
});

client.on('shardError', error => {
  console.error(error);
});
//snipe
client.snipes = new Map()
client.on('messageDelete', function(message, channel) {
    client.snipes.set(message.channel.id, {
        content: message.content,
        author: message.author.id, 
        image: message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})
//messagecreate
client.on("messageCreate", async (message) => {

  let prefix = "l!"

  if(message.author.bot) return;

  if(message.channel.type === "dm") return;

  const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)}|${escapeRegex("Wafzy")})\\s*`);
  if(!prefixRegex.test(message.content)) return;
  const [matchedPrefix] = message.content.match(prefixRegex);

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){message.reply(`Hola soy ${client.user} un bot furry.\nMi prefix es **${prefix}** Usa **${prefix}help** para ver los comandos ⚙.\nSoy un bot multifunciones con 120 comandos que puedes usar 🐱.\nPuedes unirte a el servidor de mi creadora 🧧. \nhttps://discord.gg/r9ze7bVS29`)}


  if(!message.content.startsWith(matchedPrefix)) return;
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

  const command = args.shift().toLowerCase();
 
  let cmd = ((c) => c.name === command || c.alias && c.alias.includes(command));
//fin
  if (cmd) {
  }
  if(!cmd){
    if(message.content === matchedPrefix) return;
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
    .setTitle("❌ | Comando no encontrado.")
    .setDescription(`El comando **"${command}"** no existe.`)
    .setColor("RED")
    .setFooter({ text: "Para ver los comandos escribe !w help" })
    .setTimestamp()

    message.channel.send({ embeds: [embed] })
  }
});