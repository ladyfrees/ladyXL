const moment = require("moment")
require("moment-duration-format")

module.exports = {
  name: "uptime",
  run: async (client, message, args) => {

    const uptime = moment.duration(message.client.uptime).format(" D [Dias], H [Horas], m [Minutos]");

    message.reply(` - ${message.author}, esta en linea hace : **${uptime}**`)
  }
}