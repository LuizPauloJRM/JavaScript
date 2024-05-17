//Função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(3, 4)//Chamando a funcao pelo nome
imprimirSoma(3)
imprimirSoma(3,10,5,6,7,8)

//Com retorno de dados 
function soma(a,b=1)
 {
    return a + b;
}
console.log(soma(10+5))