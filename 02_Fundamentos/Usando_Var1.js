//Usando variavel "Var"
{
    {
        {
            {
                var forma1 = 'forma 1'
                console.log(forma1)
            }
        }
    }
}
//Não possivel acesso da variavel nesta forma 2 esta visivel dentro do escopo 
console.log(forma1)
function forma2(){
    var local=123
    console.log(local)
}

forma2()
//console.log(local)