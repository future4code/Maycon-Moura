// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Insira a altura"))
  let largura = Number(prompt("Insira a Largura"))
  const resultado = altura * largura

  console.log("O resultado é:", resultado)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoNascimento = Number(prompt("Insira o ano de seu nascimento"))
  let anoAtual = Number(prompt("Insira o ano de seu nascimento"))

  let idade = anoNascimento - anoAtual

  console.log("Sua idade é:", idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Insira seu peso"))
  let altura = Number(prompt("Insira sua altura"))
  let imc = peso / (altura * altura)

  console.log("O seu IMC é:", imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt("Insira seu nome")
  const idade = prompt("Insira sua idade")
  const email = prompt("Insira seu email")

  console.log("Meu nome é", nome, "tenho", idade, "anos, e o meu email é", email)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt ("Insira suas cores favoritas")
  console.log(cor1)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}