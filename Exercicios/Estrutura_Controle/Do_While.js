function getInteiroAleatorioEntre(min,max){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}
let opcao //Somente iniciada a va
do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida ${opcao}.`)
}while (opcao != -1)
console.log ('Próxima')