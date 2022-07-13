/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 The bot was made by the owner, siro
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 13 
Thank you for using my bot.
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/siro



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['79586848937'] // Owner number , (رقم المالكة )
global.pemilik = ['84921228172'] //Change  it , رقم اخر
global.premium = ['79586848937'] //Change it مكرر
global.pengguna = 'Dark Maker' // Your name siro
global.botnma = '💃 siro 𝐁𝐨𝐭 💃' // Your bot name , siro
global.ownernma = 'siro bot' //ownernama,ownername
global.packname = 'ملصقات سيرو بوت' // Sticker package name 
global.author = 'siro bot' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , siro bot alive massage مرحبا انا سيرو بوت با عزيزي  ` ` شكرا لاستخدامك سيرو بوت
global.alivelogo = `https://drive.google.com/file/d/1JeC5GrJ_kTnt-vh4Q1rhMTwutXVaYZvW/view?usp=sharing`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using... siro`
// Welcome massage  
global.welcome = to siro bot`
🌀 Thanks Fro using siro bot
✾ Some bugs fixing
😼♥️
`
// 
global.sendwelcome = `add`
// Good bye الى اللقاء remove مع السلامة
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 siro bot`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This bot is for Siro only.',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait siro bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {siro-12 hours
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, (siro) => {bot
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__siro bot}'`))
	delete require.cache[file]
	require(file)
})
