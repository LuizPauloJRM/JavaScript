//Par / nome/ valor
const identificador = 'Valor'//Contexto léxico 1
function exec(){
  const saudacao = 'Olá'//Contexto léxico 2
  return saudacao
}
//Objeto são grupos aninhados de pares nome/valor
const cliente ={
  nome: 'Luiz',
  idade: 25,
  peso:86,
  endereco:{
    logradouro:'Rua Quadra 01 conjunto E1',
    numero:38 

  }
}
console.log(identificador)
console.log(exec())
console.log(cliente)