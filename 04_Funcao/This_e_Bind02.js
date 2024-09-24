//This e bind
//Armazena o this em uma constante depois usa 
function Pessoa(){
    this.idade = 0
    const self = this//Armazenado em uma constante self
    setInterval(function() {//função e intervalo recebidos 
        this.idade++
        console.log(this.idade)
    },1000)/*.bind 1000)*///Intervalo a partir do valor 1000 seconds a cada segundo idade sendo acrescentada 
}
new Pessoa