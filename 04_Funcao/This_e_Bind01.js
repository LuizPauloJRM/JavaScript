//This e função bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
    
}
pessoa.falar()
const falar = pessoa.falar
falar()//Conflito 

const falarComBind = pessoa.falar.bind(pessoa)
falarComBind()//Conflito  de paradigmas : funcional e 00 

segundaFala = pessoa.falar.bind(pessoa)
falarComBind()