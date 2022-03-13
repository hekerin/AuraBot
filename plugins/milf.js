let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=458482071d3ef6fe3f1e4e76`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'nulis', '*Wangy wangy*', m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['milf']
handler.tags = ['premium']
handler.command = /^(milf)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
