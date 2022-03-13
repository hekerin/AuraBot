let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.caliph71.xyz/api/asupan/loli?apikey=NbaLwTv5`

  conn.sendFile(m.chat, res, 'loli.jpg', `*LOLI* `, m, false, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['lolivid'].map(v => v + ' ')
handler.tags = ['anime']

handler.fail = null
handler.exp = 0
handler.limit = 1

handler.command = /^(lolivid)$/i

module.exports = handler
