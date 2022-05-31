let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┌─〔 %me 〕
├ Hai, *%name!*
├ Uptime *%uptime*
├ Database *%totalreg*
└────
%readmore`.trim(),
  header: '┌─〔 %category 〕',
  body: '├◉ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: `
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'grup', 'premium', 'internet', 'anonymous', 'anime', 'nulis', 'downloader', 'tools', 'fun', 'database', 'islamic', 'audio', 'nsfw', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'anime': 'Anime',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'nsfw': 'Nsfw',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'islamic') tags = {
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
     let judul = `${ucapan()}, ${name}`.trim()
      const sections = [
      {
        title: 'List Menu ' + namabot, 
        rows: [
          { title: `Pemilik Bot[👨‍💻]`, 
           "description": "Nomor Pemilik Bot (owner)",
           rowId: `${_p} creator` },

          { title: `Syarat Ketentuan dan Peraturan[📜]`, 
           "description": "Harap membaca Peraturan demi kenyamanan kita bersama",
           rowId: `${_p} rules` },

          { title: `Group Official AuraBot[🎊] `, 
           "description": "Gabung untuk mendapatkan informasi mengenai bot atau sekedar meramaikan",
           rowId: `${_p} auragc` },

          { title: 'Semua Perintah', 
           "description": "Menu Semua Perintah",
           rowId: `${_p}? all` },
          
          { title: 'Game',
           "description": "Menu untuk Game",
           rowId: `${_p}? game` },
          
          { title: 'XP', 
           "description": "Menu untuk XP",
           rowId: `${_p}? xp` },
          
          { title: 'Stiker',
           "description": "Menu untuk Sticker",
           rowId: `${_p}? stiker` },
          
          { title: 'Kerang Ajaib',
           "description": "Puja kerang ajaib...",
           rowId: `${_p}? kerangajaib` },
          
          { title: 'Quotes', 
           "description": "Menu untuk Quotes",
           rowId: `${_p}? quotes` },
          
          { title: 'Grup', 
           "description": "Menu untuk Group",
           rowId: `${_p}? grup` },
          
          { title: 'Premium',
           "description": "Menu untuk Premium Users",
           rowId: `${_p}? premium` },
          
          { title: 'Internet',
           "description": "Menu untuk menjelajahi Internet...",
           rowId: `${_p}? internet` },
          
          { title: 'Anonymous',
           "description": "Menu untuk Anonymous Chat",
           rowId: `${_p}? anonymous` },

          { title: 'Menu Anime',
           "description": "Menu untuk Wibu",
           rowId: `${_p}? anime` },

          { title: 'Menu NSFW',
           "description": "Menu 18+",
           rowId: `${_p}? nsfw` },
          
          { title: 'Nulis & Logo',
           "description": "Menu untuk Nulis & Logo",
           rowId: `${_p}? nulis` },
          
          { title: 'Downloader',
           "description": "Menu Downloader",
           rowId: `${_p}? downloader` },
          
          { title: 'Tools',
           "description": "Menu untuk Tools",
           rowId: `${_p}? tools` },
          
          { title: 'Fun',
           "description": "Menu Hiburan",
           rowId: `${_p}? fun`},
          
          { title: 'Database',
           "description": "Menu untuk Database",
           rowId: `${_p}? database` },
          
          { title: 'Vote & Absen',
           "description": "Menu untuk Vote & Absen",
           rowId: `${_p}? vote` },
          
          { title: "Islami",
            "description": "Menu Islami",
           rowId: `${_p}? quran` },
          
          { title: 'Pengubah Suara',
           "description": "Menu Pengubah Suara",
           rowId: `${_p}? audio` },

          { title: 'Info',
           "description": "Menu untuk Info",
           rowId: `${_p}? info` },
          
          { title: 'Tanpa Kategori',
           "description": "Menu Tanpa Kategori",
           rowId: `${_p}? tanpakategori` },
          
          { title: 'Owner',
           "description": "Menu Khusus Owner",
           rowId: `${_p}? owner` },
        ]
      }
    ]
      const listMessage = {
      text: 'Berikut ini adalah daftar menu AuraBot.',
      footer: "Silahkan tekan tombol \"Click Here\" untuk melihat sub-menu AuraBot.\n\nJika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
      mentions: await conn.parseMention(judul),
      title: judul,
      buttonText: "Click Here",
      sections
    }

    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, fla + teks, text.trim(), wm, `Owner`, `${_p}owner`, `Grup Official`, `${_p}auragc`, `Donasi`, `${_p}donasi`)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }
