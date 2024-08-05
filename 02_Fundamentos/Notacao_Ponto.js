console.log(Math.ceil(6.1))
const objt1={}
objt1.nome='Luiz'//objt['nome'] = 'Paulo' , notação 
console.log(objt1.nome)
function Obj(nome){
    this.nome = nome//público
    this.exec = function(){
        console.log('Executed...')
    }
}
const Obj2 = new Obj('Paulo')
const Obj3 = new Obj('Medeiros')
console.log(Obj2.nome)
console.log(Obj3.nome)
