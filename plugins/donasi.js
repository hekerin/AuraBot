let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
let pp = await(await fetch(image)).buffer()
await conn.reply(m.chat, `
┌〔 Donasi • Emoney 〕
├ GoPay: 6281393227036
├ OVO: -
├ Dana: 6281393227036
├ Pulsa (Telkom): 6281393227036
└────
`.trim(), m, { contextInfo: {
    externalAdReply: {
      sourceUrl: ' https://wa.me/6281393227036',
      title: 'Donasi',
      body: 'AuraBot',
      thumbnail: pp
    }
}})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler