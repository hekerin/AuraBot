let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  try {
    let gc1 = '628112958665-1625393837@g.us'
    let gc2 = '6281393227036-120363041039565084@g.us'
    let gc3 = '628112958665-1571053173@g.us'
    let _gc1 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc1)
    let _gc2 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc2)
    let _gc3 = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(gc3)
    let caption = `
*Join juga group official AuraBot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.
*Group 1*
${_gc1}
*Group 2*
${_gc2}
*Group 3*
${_gc3}
Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), caption, watermark, 'Owner', '.owner', 'Sewa', '.sewa', m, { contextInfo: { mentionedJid: m.sender } })
  } catch (e) {
    let res = await fetch('https://raw.githubusercontent.com/RFIunknown/AuraBot-server/a3aedeae99434ab20250172b2fb6c48bb2bd509f/files/src.json')
    let json = await res.json()
    let tulisan = `
*Join juga group official AuraBot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.
*Group 1*
${json.links[0]}
*Group 2*
${json.links[1]}
*Group 3*
${json.links[2]}
Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), tulisan, watermark, 'Owner', '.owner', 'Sewa', '.sewa', m, { contextInfo: { mentionedJid: m.sender } })
  }
}
handler.help = ['groupofficial']
handler.tags = ['main']
handler.command = /^auragc|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
