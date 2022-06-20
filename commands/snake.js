const { Snake } = require('discord-gamecord')

module.exports = {
 name: "snake",
 aliases: ["snek", "saap"],
 category: "fun",
 description: "snek",
 usage: ".snek",
 run: async (client, message, args) => {
new Snake({
  message: message,
  slash_command: false,
  embed: {
    title: 'Snake',
    color: '#5865F2',
    OverTitle: 'Tú perdiste',
  },
  snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
  emojis: {
    board: '⬛', 
    food: '🍎',
    up: '⬆️', 
    right: '➡️',
    down: '⬇️',
    left: '⬅️',
  },
  foods: ['🍎', '🍇', '🍊'],
  stopButton: 'Parar',
  othersMessage: 'No puedes usar los botones de otra persona!',
}).startGame();
 }
};  