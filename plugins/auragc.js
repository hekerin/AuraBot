let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    try {
        let pp = await(await fetch(image)).buffer
        let gc1 = '6281393227036-120363037529652885@g.us'
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
        await conn.reply(m.chat, caption, m, { contextInfo: {
            externalAdReply: {
              sourceUrl: 'https://rfiunknown.github.io/dist/',
              title: 'Official group',
              body: 'AuraBot',
              thumbnail: pp
            }
        }})
    } catch (e) {
        let res = await fetch('https://raw.githubusercontent.com/RFIunknown/AuraBot-server/main/files/src.json')
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
    await conn.reply(m.chat, tulisan, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://rfiunknown.github.io/dist/',
            title: 'Official group',
            body: 'AuraBot',
            thumbnail: pp
        }
    }})
    }
}
handler.help = ['groupofficial']
handler.tags = ['main']
handler.command = /^auragc|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
