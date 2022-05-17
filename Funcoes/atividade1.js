const alunos = [
  {
    nome: 'Ricardo',
    nota: 6.5
  },
  {
    nome: 'Aline',
    nota: 8.3
  },
  {
    nome: 'Asaph',
    nota: 9.2
  },
  {
    nome: 'William',
    nota: 3.5
  }
]
const media = 7
function alunosAprovados(alu, media){
  let aprovados = []
  for(let i = 0; i < alu.length; i++){
    const {nome, nota} = alu[i];

    if(nota >= media){
      aprovados.push(nome)
    }
  }
  return `Os alunos aprovados são ${aprovados}`
}
console.log(alunosAprovados(alunos, media))