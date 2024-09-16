//Parâmetros com variáveis 
function soma (){
    let soma = 0 //Inicio na soma com "0"
    for (i in arguments){//Todos os parametros
        soma += arguments[i]//indice 1     
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.2,1.4,2.2))