let palavra = "helloolleh"

//Forma 1: Separei a string palavra usando os métodos split("") para separar cada parte da string e transformei em um array, reverse() para reverter o array e join("") para poder unir as partes do array de forma revertida, tudo isso coloquei em uma variável palavraReverse e fiz a comparação.
function verificarPalindromo(palavra){
  let palavraReverse = palavra.split("").reverse().join("")
  if( palavra === palavraReverse && palavra !== ""){
    return `A palavra ${palavra} é um palíndromo.`
  }else if(palavra === ""){
    return `Digite uma palavra`
  }else{
    return `A palavra ${palavra} não é um palíndromo.` 
  }
}

//Forma 2: Criado usando um loop de repetição onde separei toda a string e verifiquei se ela era igual de traz pra frente e de frente pra traz. compadando as variáveis x e y, pois, x recebeu o array "palavra" e cada elemonto separado, de frente pra traz e o y recebeu o array "palavra" de traz pra frente.
function checarPalindromo(palavra){
  let str = palavra.length -1
  for(let i = 0; i < str/2; i++){
    let x = palavra[i]
    let y = palavra[str-i]
    if(x != y){
      return `A palavra ${palavra} não é um palíndromo.`
    }
  }
  return `A palavra ${palavra} é um palíndromo.`
}

console.log(checarPalindromo(palavra))
console.log(verificarPalindromo(palavra))