function getInteiroAleatorioEntre(min,max){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}
let opcao =-1
while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida ${opcao}.`)
    
}
console.log ('Próxima')
