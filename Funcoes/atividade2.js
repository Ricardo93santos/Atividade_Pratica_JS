function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
  nome: "Ricardo",
  idade: 28
}
const pessoa2 = {
  nome: "Aline",
  idade: 30
}
const pessoa3 = {
  nome: "Asaph",
  idade: 1.6
}
let anos = 50
console.log(calculaIdade.call(pessoa1, anos))
console.log(calculaIdade.apply(pessoa3, [anos]))