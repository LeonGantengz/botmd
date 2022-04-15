function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;LeonGanz;;;FN:LeonGanz\nORG:Rama Agung;\nTEL;type=CELL;type=VOICE;waid=6285608625102:+62 856-0862-5102\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6285608625102', 'Rama Agung', m)
m.reply(m.chat,'*Tuh nomor owner ku tersayang*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
