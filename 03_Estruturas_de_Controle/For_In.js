//For / In 
//for (i in notas)
const notas = [2.2,3.4,4.5,5.1,6.7]
//Para cada um dos elementos "notas" vai devolver o indice "i"
for(let i in notas){
    console.log(i, notas[i])
}
const pessoa = { 
    nome: 'Luiz',
    sobrenome: 'Medeiros',
    idade: 25,
    peso: 84
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
