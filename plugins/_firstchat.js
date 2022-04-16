import moment from 'moment-timezone'
import fetch from 'node-fetch'
let handler = m => m

export async function all(m) {

    let user = global.db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (!user.firstchat) return
    if (db.data.settings.groupOnly) return
    let name = conn.getName(m.sender)
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) { 
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
    let teks = `
*Hi ${name}, ${ucapan()}*
Saya adalah AuraBot salah satu bot WhatsApp.

*Harap untuk tidak menelpon, meminta save, atau spam dalam penggunaan bot*
Silahkan baca rules dan mematuhi rules demi kenyamanan kita bersama.
Terimakasih

*Bot bukan manusia, chat selain yang terdaftar di .menu tidak akan direspon!*
Jika ada kendala silahkan hubungi owner.
`.trim()
    const message = {
        image: { url: 'http://telegra.ph/file/29f2d451412ae151a2dfb.jpg'},
        jpegThumbnail: await(await fetch('http://telegra.ph/file/29f2d451412ae151a2dfb.jpg')).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Grup AuraBot',
                    url: 'https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Menu',
                    id: '.menu'
                }
            }
        ]
    }
    await this.sendMessage(m.chat, message, { quoted: m })
    user.firstchat = false
}
