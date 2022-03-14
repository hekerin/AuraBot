let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `*${pickRandom(akbar)}*\n~Kata akbar~`, m)
}
handler.help = ['akbar']
handler.tags = ['quotes']
handler.command = /^(akbar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const akbar = [
"Mungkin disini aku menunggu kamu disana candu",
"Aku disini menunggu dengan kenangan kita bersama kamu disana candu dengan orang baru mu",
"Oranag gamten ituh typo😎",
