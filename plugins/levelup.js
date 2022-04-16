let levelling = require('../lib/levelling')
let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
  let who = m.sender
  let pp = await(await fetch('https://telegra.ph/file/2fd33e5db7f9296439ae7.jpg')).buffer()
  let kai = await(await   let kai = await(await fetch('https://telegra.ph/file/2fd33e5db7f9296439ae7.jpg')).buffer()
  try {
    pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
  } catch (e) {
  } finally {
    let user = global.db.data.users[m.sender]
    let users = Object.entries(global.db.data.users).map(([key, value]) => {
      return { ...value, jid: key }
    })
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
    let usersLevel = sortedLevel.map(enumGetKey)
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
      let text = `@${who.split`@`[0]} Level *${user.level} (${user.exp - min}/${xp})*\nKurang *${max - user.exp}* lagi!`.trim()
      await conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
        mentionedJid: [who],
        externalAdReply: {
          sourceUrl: 'https://rfiunknown.github.io/dist/',
          title: 'Kurang dikit lagi!',
          body: 'AuraBot',
          thumbnail: pp
        }
      }})
    }
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let text = `@${who.split`@`[0]} _*Level Up!*_\n_${before}_ -> _${user.level}_`.trim()
      await conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
        mentionedJid: [who],
        externalAdReply: {
          sourceUrl: 'https://rfiunknown.github.io/dist/',
          title: 'Levelup!',
          body: 'AuraBot',
          thumbnail: pp
        }
      }})
    }
  }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^levelup$/i

module.exports = handler
function sort(property, ascending = true) {

  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}