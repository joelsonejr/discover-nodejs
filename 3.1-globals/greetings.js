const getFlag = require('./getflag')

console.log(`Olá ${getFlag('--name')}, ${getFlag('--greeting')}`)
