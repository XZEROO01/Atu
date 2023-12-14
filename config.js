global.owner = ['6282140506913']  
global.mods = ['6282140506913'] 
global.prems = ['6282140506913']
global.nameowner = 'Rafzz'
global.numberowner = '6282140506913' 
global.mail = 'Rafzz@gmail.com ' 
global.gc = 'https://chat.whatsapp.com/JPHQbZSeG14Gdf5M8M0mOB'
global.instagram = 'https://www.instagram.com/xzero_real?igshid=OGQ5ZDc2ODk2ZA=='
global.wm = '© Xme-MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Xme-MD'
global.author = 'Rafzz'
global.maxwarn = '4' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.btc = 'Xme' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'Aliaputri'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Xme' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
