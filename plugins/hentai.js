let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/ass', {}, 'APIKEY'), 'ass.png', 'Nih Foto hentai-nya mau coli ya hati-hati Entar ketahuan', m, false, {thumbnail: Buffer.alloc(0) })
}
handler.help = ['hentai']
handler.tags = ['anime']
handler.command = /^hentai$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 50
handler.limit = 5

module.exports = handler
