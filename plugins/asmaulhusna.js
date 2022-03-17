let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch(global.API('https://rfiunknown.muhammad-rifai1.repl.co', '/api/muslim/asmaulhusna.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  m.reply(pickRandom(json))
}
handler.help = ['asmaulhusna [1-99]']
handler.tags = ['quran']
handler.command = /^(asmaul(husna)?)$/i
module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
