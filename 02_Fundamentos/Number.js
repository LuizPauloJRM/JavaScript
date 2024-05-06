const peso1= 1.0
const peso2= Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//Verificação se é inteiro
console.log(Number.isInteger(peso2))
const avaliacao1 = 5.841
const avaliacao2 = 8.412
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))//casas decimais 
console.log(media.toString(2))//Valor binário
console.log(typeof media)
console.log (typeof Number)//Representa uma função "Number"