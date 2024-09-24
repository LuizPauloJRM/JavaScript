//Arrow 

let dobro = function(a){
    return a * 2;//return 2 * a
}
dobro = (a) =>{
    return 2 * a 
}
dobro = a => 2 * a //return implícido
console.log(dobro(90))

let saudacao =  function(){
    return "Olá"
}
ola = () => 'Oi'//ola = _ => 'Ola'
console.log(saudacao())