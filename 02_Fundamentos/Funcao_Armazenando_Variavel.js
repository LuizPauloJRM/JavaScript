// Armazenando uma função em uma variável através de uma função anônima
const imprimirSoma = function(a, b) {
    console.log(a + b);
}
imprimirSoma(2, 4); // Output: 6

// Armazenando uma função arrow na variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3)); // Output: 5

// Armazenando uma função arrow com retorno implícito
const subtracao = (a, b) => a - b; // uma única sentença de código
console.log(subtracao(2, 3)); // Output: -1

// Função arrow com parâmetro único e retorno implícito
const imprimir2 = a => console.log(a);
imprimir2('Impresso'); // Output: Impresso