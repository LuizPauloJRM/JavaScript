function verdadeiroOuFalso(valor){
    if(valor){
      console.log('É verdadeiro... ' + valor)
    }
  }
  verdadeiroOuFalso()
  verdadeiroOuFalso(null)
  verdadeiroOuFalso(undefined)
  verdadeiroOuFalso(0)
  verdadeiroOuFalso(-1)
  verdadeiroOuFalso(6)
  verdadeiroOuFalso(' ')
  verdadeiroOuFalso('')
  verdadeiroOuFalso([])
  verdadeiroOuFalso([1,1])
  verdadeiroOuFalso({})