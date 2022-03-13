// wahai para para weaboo🗿
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('adiisus', '/api/randomimage/milf'), 'milf.jpg', '_*Nih Milf nya*_', m)
}
handler.help = ['milf']
handler.tags = ['anime']
handler.command = /^(milf)$/i
handler.limit = true
module.exports = handler
