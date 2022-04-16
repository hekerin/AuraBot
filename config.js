let fs = require('fs')
global.owner = ['6281393227036', '628985918070','628112958665', '6283175998566'] // Letakan nomor kamu disini
global.APIs = { // API Prefix
  // nama: 'https://website'
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org/',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org/': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'e840b6abcac520ca',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://api.lolhuman.xyz': '929b48b9aa5a91abed8526cd',
  'https://api.vhtear.com': 'sayahafiz',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Sticker WM
global.packname = 'AuraBot'
global.author = 'Rifai'

global.wait = '「 ⏱️ 」Harap tunggu...'
global.eror = '「❗」Server ERROR!'
global.internal = 'https://telegra.ph/file/e50f241a4e33aac014ec7.jpg'
global.eksternal = 'https://telegra.ph/file/c7073a9a5a95faafcc913.jpg'
global.watermark = '© AuraBot'
global.thumbfoto = 'http://telegra.ph/file/29f2d451412ae151a2dfb.jpg' 
global.image = 'https://telegra.ph/file/39bbded9693c9338069fd.jpg'

global.multiplier = 175 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
