let limit = 30
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) throw 'Uhm... urlnya mana?'
let { thumbnail, audio, title } = await youtubedl(args[0])
    .catch(async () => await youtubedlv2(args[0]))
let link = await audio['128kbps'].download()
const isY = /y(es)/gi.test(args[1])
const limitedSize = (isPrems || isOwner ? 99 : 70) * 1024
let isLimit = limitedSize < audio['128kbps'].fileSize
if (!isY) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*📌Title:* ${title}
*🗎 Filesize:* ${audio['128kbps'].fileSizeH}
*${isLimit ? 'Pakai ' : ''}Link:* ${link}
`.trim(), m)
if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp3', `
*📌Title:* ${title}
*🗎 Filesize:* ${audio['128kbps'].fileSizeH}
`.trim(), m, null, {
asDocument: 1
})
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
