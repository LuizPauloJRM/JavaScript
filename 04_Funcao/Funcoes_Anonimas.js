//Funções anonimas 
const soma = function(x,y){
    return x + y;

}
const imprima = function(a, b, operacao=soma)
    {
        console.log(operacao(a,b))
    }
    
imprima(2,3)
imprima(3,4,soma)//3 parametros 
imprima(3,4, function(x,y){
    return x - y
})
imprimaResultado(3,4,(x,y)=> x * y)
const pessoa = {
    falar : function(){
        console.log('Olá')
    }
}
pessoa.falar() 