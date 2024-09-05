//Do while : Quantidade indeterminada , expressao depois do bloco de código
//Executa o código depois ver se continua ou não  
function getInteiroAleatorioEntre(min,max){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}
let opcao =-1
do{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida ${opcao}.`)
}while (opcao != -1)
console.log ('Próxima')