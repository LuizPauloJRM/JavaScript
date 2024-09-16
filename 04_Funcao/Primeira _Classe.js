//Primeira linha , primeira classe 
//Forma literal 
//First- Class Object 
function fun1(){

}

//Armazenando em uma variavel, referenciar a partir de um constante 
const fun2 = function(){

}
//Array 
const array = [function(a,b){return a + b},fun1,fun2]
console.log(array[0](2,3))

//Objeto

const obj = {}
obj.falar = function(){return 'Bom dia!'}
console.log(obj.falar())//Retornando Bom dia construído 

//Função como parametro

function exec(funcao){
    funcao()//Invocar com os "()"
}

exec(function(){console.log("Executar...")})

//Função como retorno , conter uma outra função 

function soma(a,b){
    return function(c){//Terceiro parâmetro 
        console.log(a + b + c) 
        //return a + b + c
    }
}
soma(5,6)(4)
//const soma2 = soma(5,6)
//soma2(4)
