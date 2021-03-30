//clearInterval irá cancelar um setInteval registrado
const timeOut = 1000
const cheking = () => console.log('checking')

let interval = setInterval(cheking, timeOut)
// clearInterval(interval)

setTimeout(() => clearInterval(interval), 4000)