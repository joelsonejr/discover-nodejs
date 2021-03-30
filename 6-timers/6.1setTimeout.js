//vai rodar uma função depois de x milissegundos

const timeOut = 3000

const finished = () => console.log('done')

setTimeout(finished, timeOut) 
console.log('Mostrar')