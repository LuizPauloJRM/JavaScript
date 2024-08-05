function imprimirSoma(a,b){
    console.log(a + b);
}
imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,10,4,5,6,7,8);//pega o primeiro e segundo atributo e soma ignorando o restante 

//Função com retono
function soma(a,b=1)
 {
    return a + b;
}
console.log(soma(2,3))
console.log(soma(2))