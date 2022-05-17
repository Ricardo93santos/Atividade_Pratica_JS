function comparandoNumeros(n1, n2){
  const primeiraFrase = criarPrimeiraFrase(n1, n2)
  const segundaFrase = criarSegundaFrase(n1, n2)
  return `${primeiraFrase} ${segundaFrase}`
}//Função callback que monta a frase que será mostrada ao usuário

function criarPrimeiraFrase(n1, n2){
  let naoIguais = ""
  let igual = n1 === n2
  if(!igual){
    naoIguais = "não"
  }
  return `Os números ${n1} e ${n2} ${naoIguais} são iguais.`
}//Função para criar primeira frase

function criarSegundaFrase(n1, n2){
  const soma = n1 + n2
  let maiorMenor10 = "maior"
  let maiorMenor20 = "maior"
  const comparar10 = soma > 10
  const comparar20 = soma > 20
  
  if(!comparar10){
    maiorMenor10 = "menor"
  }
  if(!comparar20){
    maiorMenor20 = "menor"
  }
  if(soma === 10){
    return `Sua soma é ${soma}, que é igual a 10 e menor que 20.`
  }else if( soma === 20){
    return `Sua soma é ${soma}, que é maior que 10 e igual a 20.`
  }
  return `Sua soma é ${soma}, que é ${maiorMenor10} que 10 e ${maiorMenor20} que 20.`
}//Função para criar a segunda frase

console.log(comparandoNumeros(1, 50))