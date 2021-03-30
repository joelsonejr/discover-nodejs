const {EventEmitter} = require('events')

const ev = new EventEmitter()

//escutar eventos. 
//Sintaxe: (evento que será "ouvido", função (o que fazer quando o evento ocorrer))
//Pode ser utilizado 'once' ao invés de 'on', para que o evento seja ouvido uma única vez.
ev.on('saySomething', (name) => {
    console.log('Estou sempre ouvindo', name)
})

//disparar eventos
ev.emit('saySomething', 'Joe')
ev.emit('saySomething', 'Koe')

