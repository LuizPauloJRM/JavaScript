let valor 
console.log(valor)
valor = null//Sem valor , não aponta nenhum local da memória 
console.log(valor)
//console.log(valor.toString()) type error 
const produto ={}//objeto 
console.log(produto.preco)
console.log(produto)
produto.preco = 100.50
console.log(produto)
produto.preco = undefined
console.log(!!produto.preco)//boolean
console.log(produto)
//delete produto.preco
produto.preco = null // sem valor 
console.log(produto)
