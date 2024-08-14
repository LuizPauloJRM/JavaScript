function tratarElancar(erro) {
    throw new Error('Erro de processamento...');
  }
  
  function imprimirNomeAlerta(obj) {
    try {
      // Ensure 'name' property exists and is a string
      if (typeof obj.name !== 'string') {
        throw new Error('Invalid name property');
      }
      console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
      tratarElancar(e);
    } finally {
      console.log('fim');
    }
  }
  
  const obj = { nome: 'Luiz' };
  imprimirNomeAlerta(obj);
  