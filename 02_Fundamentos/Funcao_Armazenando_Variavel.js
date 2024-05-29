//Armazenando uma função em uma variavel através de uma função anonima 
const imprimirSoma= function(a,b) {
    console.log(a + b);
}
imprimirSoma(2,4 )
e
//Armazenando uma função arrow na variável

const soma = (a,b) => {// forma reduzida -> => (function)
    return a+b;
}
console.log(soma(2,3));

// implicito

const subtracao = (a,b) => a-b;//uma única setença de código
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a);
imprimir2('Impresso');