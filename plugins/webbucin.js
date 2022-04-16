let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*Berikut adalah beberapa web bucin yang tersedia*

Web 1 ⇨ https://webbucinv1.muhammad-rifai1.repl.co
Web 2 ⇨ https://webbucinv2.muhammad-rifai1.repl.co
Web 3 ⇨ https://webbucinv3.muhammad-rifai1.repl.co
Web 4 ⇨ https://webbucinv4.muhammad-rifai1.repl.co
Web 5 ⇨ https://webbucinv5.muhammad-rifai1.repl.co

`.trim(), m)
}
handler.help = ['webbucin']
handler.tags = ['quotes']
handler.command = /^(webbucin)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler