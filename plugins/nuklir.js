let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `*${pickRandom(nuklir)}*\n*Nih Gan Kode Nuklir full color nya*`, m)
}
handler.help = ['nuklir']
handler.tags = ['nsfw']
handler.command = /^(nuklir)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true


handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const nuklir = [
"278391",
"226637",
"397171",
"191037",
"396638",
"396084",
"396301",
"278391",
"226637",
"397171",
"191037",
"396638",
"396084",
"397818",
"396301",
"388524",
"397899",
"390285",
"317872",
"346059",
"237473",
"334009",
"143824",
"367258",
"395661",
"396922",
"363397",
"397180",
"365676",
"397690",
"397061",
"397664",
"306318",
"384656",
"397502",
"397501",
"356950",
"397500",
"397437",
"397408",
"397171",
"397600",
"397193",
"356951",
"367228",
"357051",
"347956",
"367230",
"347953",
"287035",
"367231",
"346060",
"306330",
"378100",
"347956",
"397725",
"367241",
"398066",
"398366",
"244238",
"393913",
"398377",
"398380",
"383207",
"398167",
"397966",
]
