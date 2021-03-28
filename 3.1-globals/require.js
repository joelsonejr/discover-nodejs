/* 'require()' : é uma maneira de chamar módulos, que já são nativos do nodeJS, ou módulos que foram criados, ou adicionados ao node. */

/* Módulos nativos
const path = require('path')

console.log(path.basename(__filename))

 */

const myModule = require('./exports.js')

const getFlag = require('./getflag')

const inputString = process.argv

console.log(inputString)