const fs = require('fs')

exports.MenuBot = (prefix) => {
    return ` # Owner-Menu
  
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}autorespon [ _on/off_ ]
• ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
• ${prefix}tobc [ _reply sticker/audio with caption_ ]
• ${prefix}return [ _javascript_ ]
• ${prefix}clearall
• ${prefix}delchat
• ${prefix}mute
• ${prefix}unmute
• ${prefix}public
• ${prefix}self
• ${prefix}spam [ _teks|jumlah_ ]
• ${prefix}demoteall
• ${prefix}promoteall
• ${prefix}addcmd [ _teks reply stc_ ]
• ${prefix}delcmd [ _reply stc_ ]
• ${prefix}listcmd
• ${prefix}spamsw [ _teks|jumlah_ ]
• ${prefix}shutdown
• ${prefix}offline [ _alasan_ ]
• ${prefix}online
• ${prefix}exif [ _nama|author_ ]
• ${prefix}setprofile [ _reply image_ ]
• ${prefix}setname [ _teks_ ]
• ${prefix}setprefix [ _multi/nopref/prefix_ ]
• ${prefix}setbio [ _teks_ ]
• ${prefix}addsticker [ _nama_ ]
• ${prefix}delsticker [ _nama_ ]
• ${prefix}addvn [ _nama_ ]
• ${prefix}delvn [ _nama_ ]
• ${prefix}addimage [ _nama_ ]
• ${prefix}delimage [ _nama_ ]
• ${prefix}leave
• ${prefix}restart
• ${prefix}join [ _link group_ ]
• ${prefix}addrespon [ _tanya|jawab_ ]
• ${prefix}delrespon [ _nama_ ]`
} 
