//~~~~~~ EXERCICIO1 ~~~~~~
//a) O que vai ser impresso no console? (10, 50)
//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)?
//O que apareceria no console? Nada, pois não teria um comando para mostrar o resultado

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//~~~~~~ EXERCICIO2 ~~~~~~
//a) Explique o que essa função faz e qual é sua utilidade
// Ela retonar true or false, serve para confirmarmos a vericidade da variavel inserida.
//b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//true
//true
//true

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//^^^^^^Escrita de código^^^^^^
//~~~~~~ EXERCICIO1 ~~~~~~~~
//a) A função não deve receber nenhum parâmetroe deve imprimir 
//uma mensagem falando algumas informações sobre você, como: 
// "Eu sou caio, tenho 23 anos, moro em São Paulo e sou estudante"
    

// function imprimirMensagem(){
//     let nome = prompt("Qual é o seu nome?")
//     let idade = Number(prompt("Qual é a sua idade?"))
//     let cidade = prompt("Onde você mora?")
//     let profissao = prompt("Oque você faz?")
//     console.log("Eu sou", nome, "tenho", idade, "anos, moro em", cidade,"e sou", profissao)
// }

// imprimirMensagem()


//b)  Agora escreva uma função que receba 4 parâmetros que 
// correspondem às informações de uma pessoa: 
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas
// as informações da pessoa em uma só mensagem com o template:

// function imprimirMensagem(){
//     let nome = String(prompt("Qual é o seu nome?"))
//     let idade = Number(prompt("Qual é a sua idade?"))
//     let cidade = String(prompt("Onde você mora?"))
//     let profissao = String(prompt("Oque você faz?"))
//     console.log(`Eu sou ${nome} tenho, ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// imprimirMensagem()

//~~~~~~~~ EXERCICIO2 ~~~~~~~~~
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das 
//duas entradas e retorne o resultado. Invoque a função e imprima 
//no console o resultado.

// function fazerSoma(){
//     const a = Number(prompt("Insira um número"))
//     const b = Number(prompt("Insira outro numero"))
//     const resultado = a + b
//     return resultado
// }

// console.log(fazerSoma())

//b) Faça uma função que recebe 2 números e retorne um booleano
// que informa se o primeiro número é maior ou igual ao segundo.

// function booleano(){
//     let primeiroNumero = Number(prompt("Insira um numero"))
//     let segundoNumero = Number(prompt("Insira um numero"))
//     //let resultado = 
//     Boolean = primeiroNumero >= segundoNumero
//     console.log(Boolean)
// }

// booleano()

//~~~~~~~~ EXERCICIO3 ~~~~~~~~~

function operacoesBasicas(){
    let primeiroNumero = Number(prompt("Insira um numero"))
    let segundoNumero = Number(prompt("Insira outro numero"))

    let soma = primeiroNumero + segundoNumero
    let sub = primeiroNumero - segundoNumero
    let multi = primeiroNumero * segundoNumero
    let divisao = primeiroNumero / segundoNumero

    console.log("Numeros inseridos:", primeiroNumero, segundoNumero)
    console.log("Soma:", soma)
    console.log("Diferença:", sub)
    console.log("Multiplicação:", multi)
    console.log("Divisão:", divisao)
}

operacoesBasicas()
