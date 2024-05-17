let usAtivo = false;    
console.log(usAtivo);
let isAtivo = true;
console.log(isAtivo);
isAtivo = 1;
console.log(!!isAtivo);


console.log("Os verdadeiros")
console.log(!!2);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!Infinity); 
console.log(!!{});
console.log(!!(isAtivo = true));

console.log("Os falsos")
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Outros tipos bollean")
console.log(!!('' || null || 0 || ' '));

let nome = 'Luiz Paulo';
console.log(nome || 'Desconhecido');