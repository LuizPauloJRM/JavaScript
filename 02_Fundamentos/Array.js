//.push,.log,delete
//
const valores = [1 , 2  , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
console.log(valores[0], valores[1], valores[2], valores[3]);
console.log(valores[4], valores[5]);
valores[9] = 12;
console.log(valores);
console.log(valores[9]);
console.log(valores.length);//Quantidade de elementos dentro do "Array" 
valores.push({id:3}, false, null, 'teste');//Adicionando novos elementos
console.log(valores);
console.log(valores.pop());
delete valores [0]
console.log(valores);
console.log(typeof valores);

