let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Tag Orang yang mau di maling pp nya :v', m)

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let username = conn.getName(who)
    let str = `Nihh PPnya @${who.replace(/@.+/, '')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp @user']
handler.tags = ['tanpakategori']
handler.command = /^getpp$/i

handler.group = true

module.exports = handler
