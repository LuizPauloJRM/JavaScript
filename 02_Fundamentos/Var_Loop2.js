const funcao = [] 
for (var i=0;i<10;i++){
    funcao.push(function(){//funcao anonima
        console.log(i)
    })
}
funcao[2]()
funcao[8]()
funcao[6]()