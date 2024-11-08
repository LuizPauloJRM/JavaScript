console.log(soma(3, 4));
//console.log(sub(3, 4)); temos que declarar somente depois

//Como podemos declarar funções
//function declaration
function soma(x, y) {
  return x + y;
}
//function expression , parametros e corpo da function
const sub = function (x, y) {
  return x - y;
};
console.log(sub(2, 1));

//named function expression
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 5));
