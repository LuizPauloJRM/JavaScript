
// Define the `entre` method on Number prototype
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
};

// Define the function to print the result based on the grade
const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }
    console.log('Fim');
};

// Teste da função
imprimirResultado(9);   // Saída: Quadro de honra
imprimirResultado(7.5); // Saída: Aprovado
imprimirResultado(5);   // Saída: Recuperação
imprimirResultado(2);   // Saída: Reprovado
imprimirResultado(11);  // Saída: Nota inválida
