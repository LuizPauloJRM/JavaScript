//Parâmetros e retornos opcionais 
function area (largura,altura){
    const area =largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido na area: ${area}`)
    }else{
        return area
    }
}
console.log(area(10,6))
console.log(area(1,6))
console.log(area(4,5,8,9,13))
console.log(area(5,5))