// wahai para para weaboo🗿
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('adiisus', '/api/randomimage/cosplay'), 'cosplay.jpg', '_*Ini cosplayer nya*_', m)
}
handler.help = ['cosplay']
handler.tags = ['anime']

handler.command = /^(cosplay)$/i

module.exports = handler
