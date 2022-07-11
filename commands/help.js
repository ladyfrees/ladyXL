const { MessageActionRow, MessageSelectMenu, MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
  name: 'help',
  aliases: ['comandos'],
  run: async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('LadyXL・Panel de Comandos')
    .setDescription(`**¡Hola humano! ¡Soy LadyXL, un bot simple enfocado en\nservidores de ayuda!**\n\n**Desarrolladora:**🛐LadyGalletita🌟#7777**\n\n**¡Tengo varios comandos para que los pruebes!**\n\n**Operando desde:** __17 de junio de 2022__\n\n**Únase a mi servidor de soporte: **[haga clic aquí] (https://discord.gg/EtujewuhEb)**`)
    .setImage('https://i.blogs.es/157e40/2dd4f2c1424c432a48c38178d6dc4934/1366_2000.png')
    .setColor('RANDOM')

    const embed2 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Moderacion')
    .setImage('https://cdn-icons-png.flaticon.com/512/1255/1255919.png')
    .setDescription("> ▶ **Comando de Ban** `ban <@usuario>`\n> ▶ **Comando de unban** ` unban <@usuario>`\n> ▶ **Comando de limpiar chat -** `clear`\n> ▶ **Comando de bloquear canal** `lock`\n> ▶ **Comando de desbloquear canal -** `unlock`\n> ▶ **Comando de kickear** `kick`\n> ▶ **Comando de añadir rol** `addrole`\n> ▶ **Comando de sorteo** `giveaway`\n> ▶ **Comando de remover rol** `removerol`\n> ▶ **Comando de ver mensaje elimando** `snipe`\n> ▶ **Comando de crear roles mas rapido** `createrole`\n> ▶ **Comando de eliminar roles mas rapido** `deleterole`")
    .setColor('RANDOM')

    const embed3 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Interracion')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991121860949463150/unknown.png?width=680&height=344') 
    .setDescription("> ▶ **Comando de abrazo** `Hug`\n> ▶ **Comando de besar** `kiss`\n> ▶ **Comando de golpear** `slap`\n> ▶ **Comando de acariciar** `pat`\n> ▶ **Comando de dormir** `sleep`\n> ▶ **Comando de maid** `maid`\n> ▶ **Comando de huellas** `paw`\n> ▶ **Comando de cocinar** `sazon`\n> ▶ **Comando para sonrojar** `flush`\n> ▶ **Comando de matar** `kill`\n> ▶ **Comando de cafe** `coffee`\n> ▶ **Comando de perversion** `lewd`\n> ▶ **Comando de explison** `nuclear`\n> ▶ **Comando de desayuno** `breakfast`\n> ▶ **Comando de muertes DOOM** `DOOM`\n> ▶ **Comando de cumpleaños** `happybir`\n> ▶ **Comando de comer galletas** `cookie`\n> ▶ **Comando de dar galletas** `cookies`")
    .setColor('RANDOM')


    const embed4 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Diversion')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991125262181863504/unknown.png?width=426&height=332') 
    .setDescription("> ▶ **Comando de say** `say`\n> ▶ **Comando de privado** `dm`\n> ▶ **Comando de 8ball** `8ball`\n> ▶ **Comando de ping** `ping`\n> ▶ **Comando de shipeo** `ship`\n> ▶ **Comando de google** `buscar`\n> ▶ **Comando de cr7** `cr7`\n> ▶ **Comando de neymar** `neymar`\n> ▶ **Comando de meme** `meme`\n> ▶ **Comando de gay** `gay`\n> ▶ **Comando de horoscopo** `horoscopo`\n> ▶ **Comando de calculadora** `calculator`\n> ▶ **Comando de google app** `appstore`\n> ▶ **Comando de sans** `sans`\n> ▶ **Comando de pelicula** `movie`\n> ▶ **Comando de buscar anime** `anime (nombre)`\n> ▶ **Comando de dexter pokemon** `dexter`\n> ▶ **Comando de aciriciar gif** `pet` ")
    .setColor('RANDOM')

    const embed5 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Informacion')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991130148130795570/unknown.png?width=551&height=217')
    .setDescription("> ▶ **Comando de personal** `userinfo`\n> ▶ **Comando de servidores** `serverinfo`\n> ▶ **Comando de emoji** `emojiinfo`\n> ▶ **Comando de bot** `botinfo`\n> ▶ **Comando de canal** `channelinfo`\n> ▶ **Comando de rol** `roleinfo`\n> ▶ **Comando de sistema** `systeminfo`\n> ▶ **Comando de miembros** `miembros`")
    .setColor('RANDOM')

    const embed6 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Juegos')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991355614666178630/unknown.png?width=682&height=380')
    .setDescription("> ▶ **Comando de cara o cruz** `coinflip`\n> ▶ **Comando de culebretita** `snake`\n> ▶ **Comando de dados** `dado`\n> ▶ **Comando de impostor** `impostor`\n> ▶ **Comando de piedra,papel o tijeras** `ppt`\n> ▶ **Comando de akinator** `akinator`\n> ▶ **Comando de 3 en raya** `ttt`\n> ▶ **Comando de pokemon** `pokemon`\n> ▶ **Comando de adivinar** `record`\n> ▶ **Comando de futbol** `football`")
    .setColor('RANDOM')

    const embed7 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Anime')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991365013098991686/unknown.png?width=724&height=407')
    .setDescription("> ▶ **Comando de rinnagan** `rinnegan`\n> ▶ **Comando de sharingan** `sharingan`\n> ▶ **Comando de marcha/gear** `gear`\n> ▶ **Comando de fruta del diablo** `dfruit`\n> ▶ **Comando de susanoo** `susanoo`\n> ▶ **Comando de super saiyan** `supersj`\n> ▶ **Comando de stand** `standjojo`\n> ▶ **Comando de time stop** `zawarudo`\n> ▶ **Comando de titan** `titan`\n> ▶ **Comando de danza de fusion** `fusion`\n> ▶ **Comando de postura** `demonpos`")
    .setColor('RANDOM')

    const embed8 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Premium')
    .setImage('https://cdn.discordapp.com/attachments/951562929667444737/991367687030718515/unknown.png')
    .setDescription("> ▶ **Comando de salirse del server** `server`\n> ▶ **Comando de ver lista de sv** `serverlist`\n> ▶ **Comando de ver documentos** `docm`\n> ▶ **Comando de sugerencia de comandos (necesario ir a el server de la creadora de ladyxl)** `sugerencia`")
    .setColor('RANDOM')

    const embed11 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Eleccion')
    .setImage('')
    .setDescription("> ▶ **Comando de gatos** `cat`\n> ▶ **Comando de perros** `dog`\n> ▶ **Comando de conejo** `rabbit`\n> ▶ **Comando de panda rojo** `redpanda`\n> ▶ **Comando de huron** `huron`\n> ▶ **Comando de mapache** `raccoon`\n> ▶ **Comando de soldado** `soldier`\n> ▶ **Comando de nanachi** `nanachi`")
    .setColor('RANDOM')

    const embed9 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Otros')
    .setImage('https://media.discordapp.net/attachments/951562929667444737/991371731862306947/unknown.png?width=407&height=407')
    .setDescription("> ▶ **Comando de ticket** `ticket`\n> ▶ **Comando de cerrar ticket** `close`\n> ▶ **Comando de anime** `trace`\n> ▶ **Comando de sexo** `sexo`\n> ▶ **Comando de no sexo** `sexooff`\n> ▶ **Comando de avatar** `avatar`\n> ▶ **Comando de respeto** `passed`\n> ▶ **Comando de calculadora mejorada** `math`\n> ▶ **Comando de morir/gta5** `wasted`\n> ▶ **Comando de ascii** `ascii`\n> ▶ **Comando de morse** `morse`\n> ▶ **Comando de cartel** `banner`\n> ▶ **Comando de reportar** `reportbug`\n> ▶ **Comando de hablar en vc** `vc`\n> ▶ **Comando de triggered** `triggered`\n> ▶ **Comando de buscar porno** `porn (+18)`\n> ▶ **Comando de buscar persona random** `random`\n> ▶ **Comando de medir banana** `banana`\n> ▶ **Comando de ver la hora** `time`\n> ▶ **Comando de suerte** `lucky`")
    .setColor('RANDOM')

    const embed10 = new Discord.MessageEmbed()
    .setTitle('LadyXL・Mejoras')
    .setDescription("> ⚙ **Comandos nuevos** `sugerencia,createrole y deleterole`\n> ⚙ **ping a ladyXL** `ahora cuando hagas ping aparecera un mensaje`")

    const row = new Discord.MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('1')
      .setPlaceholder('Mis comandos')
      .addOptions([
        {
          label: 'Menu Inicial',
          description: 'Regresar al menú de inicio',
          emoji: '🏠',
          value: '1',
        },
        {
          label: 'Moderacion',
          description: 'Comandos para Administradores',
          emoji: '👑',
          value: '2',
        }, 
        {
        label: 'Interracion',
        description: 'Comandos de interracion',
        emoji: '✋',
        value: '3',
        },
        {
          label: 'Diversion',
          description: 'Comandos divertidos',
          emoji: '🎉',
          value: '4',
        },
        {
          label: 'Informacion',
          description: 'Comandos de informacion',
          emoji: '⚙',
          value: '5',
        },
        {
            label: 'Juegos',
            description: 'Comandos de juegos',
            emoji: '⚔',
            value: '6',
        },
        {
            label: 'Anime',
            description: 'Comandos de anime',
            emoji: '🎞',
            value: '7',
        },
        {
            label: 'Premium',
            description: 'Comandos de privados',
            emoji: '🔑',
            value: '8',
        },
        {
          label: 'Eleccion',
          description: 'Comandos de eleccion alzar',
          emoji: '🎁',
          value: '11',
      },
        {
            label: 'Otros',
            description: 'Otros comandos',
            emoji: '🎩',
            value: '9',
        },
        {
            label: 'Mejoras',
            description: 'Mejoras en el bot',
            emoji: '📘',
            value: '10',
        },
 
      ])
    )
    message.reply({ embeds: [embed], components: [row]})
.then(msg=>{
			const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });
      coletor.on('collect', async(collected)=>{
				 let ticket = collected.values[0]
            collected.deferUpdate()

						if(ticket === '1'){
							 msg.edit({embeds: [embed]})
              
              
						}
						if(ticket === '2'){
							msg.edit({embeds: [embed2]})
						}
        if(ticket === '3'){
          msg.edit({embeds: [embed3]})
        }
        if(ticket === '4'){
          msg.edit({embeds: [embed4]})
        }
        if(ticket === '5'){
          msg.edit({embeds: [embed5]})
        }
        if(ticket === '6'){
          msg.edit({embeds: [embed6]})
        }
        if(ticket === '7'){
          msg.edit({embeds: [embed7]})
        }
        if(ticket === '8'){
          msg.edit({embeds: [embed8]})
        }
        if(ticket === '9'){
            msg.edit({embeds: [embed9]})
          }
          if(ticket === '10'){
            msg.edit({embeds: [embed10]})
          }
          if(ticket === '11'){
            msg.edit({embeds: [embed11]})
          }
			})
		}) 
    
			
}
            }