let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/meme', {}, 'APIKEY'), 'meme.png', '*maaf kalau krinj :v*', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^meme$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = 1

module.exports = handler
