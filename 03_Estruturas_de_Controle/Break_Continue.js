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
for (y in numeros) {
    if(y==5){
        continue
    }
    console.log(`${y}= ${numeros[y]}`)
}