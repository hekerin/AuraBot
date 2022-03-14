let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `_*total fitur: ${totalfeatures}*_`, '© AuraBot', 'Menu', '.menu', m) 
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler
