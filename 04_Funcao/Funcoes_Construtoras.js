function Carro(velocidadeMaxima = 200, delta = 5) {
  // Atributo privado
  let velocidadeAtual = 0;

  // Método público para acelerar
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // Método público para obter a velocidade atual
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

// Instância do carro Uno com valores padrão
const uno = new Carro();
uno.acelerar();
console.log("Velocidade atual do Uno:", uno.getVelocidadeAtual()); // Deve exibir: 5

// Instância do carro Ferrari com velocidade máxima de 350 e delta de 20
const ferrari = new Carro(350, 20);
ferrari.acelerar();
console.log("Velocidade atual da Ferrari:", ferrari.getVelocidadeAtual()); // Deve exibir: 20
