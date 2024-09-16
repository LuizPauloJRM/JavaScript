//Break e continue 
//Break sai para fora do switch, mudando o fluxo ,bloco mais próximo
//Continue 
const numeros = [1,2,3,4,5,6,7,8,9,10]
for (x in numeros) {
    if(x==5){
        break
    }
      
        console.log(`x= ${numeros[x]}`)
}

//Continue ignora a execução do bloco abaixo e pula para o próximo loop
for (y in numeros) {
    if(y==5){
        continue
    }
    console.log(`${y}= ${numeros[y]}`)
}
externo://Rótulo
for(a in numeros) {
    for(b in numeros) {
        if(a == 2 && b == 3) break externo;
        console.log(`Par = ${a},${b}`)
    }
}
console.log("Fim")