const arrayNumeros = []

function validaArray(arrayNumeros){
  const pares0 = converterPares(arrayNumeros) //variável que recebe a função para converter os pares em 0
  const resultado = (arrayNumeros.length == 0) ? -1 : pares0
return resultado
}
function converterPares(arrayNumeros){//função que recebe os números pares e converte eles a 0
  
  for(let i = 0; i < arrayNumeros.length; i++){
    if(arrayNumeros[i] %2 == 0){
      arrayNumeros[i] = 0
    }
  }
  return arrayNumeros
}
console.log(validaArray(arrayNumeros))