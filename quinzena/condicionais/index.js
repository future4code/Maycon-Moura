// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//EXERCICIO 1
//A) Ele diz se o numero inserido é par ou impar
//B) Para numeros pares (2,4,6,8,0)
//C) Para numeros impares (1,3,5,7,9)

//--------EXERCICIO 2---------
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//A) Para indicar o valor de uma fruta do supermercado
//B) "O preço da fruta Maçã é, R$ 2.25"
//C) Vai dar o preço do default


//------EXERCICO 3 -------
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//A) Pede para que o usuario insira um numero
//B) 10 = "passou no teste", -10 = "Essa mensagem é secreta!!!"
//C) Sim, o console,log não pode acessar a variavel mensagem dentro do escopo filho

// const idade = Number(prompt("Insira sua idade"))

// if(idade > 18){
//     console.log("Você pode dirigir!")
// } else{
//     console.log("Você não pode dirigir!")
// }



//parte 3 -----
// const turno1 = prompt("Digite M: matutino, V: vespertino, ou N: noturno")

// if(turno1 === "M"){
//     console.log("Bom dia")
// }else if(turno1 === "V"){
//     console.log("Boa tarde")
// }else if(turno1 === "N"){
//     console.log("Boa noite")
// }

// function dizTurno(turno) {
//   switch (turno) {
//     case "m":
//       console.log("Bom dia");
//       break;
//     case "v":
//       console.log("Boa tarde");
//       break;
//     case "n":
//       console.log("Boa noite");
//       break;
//     default:
//       console.log("Digite uma das opções disponíveis");
//   }
// }

// const turnoUsuario = prompt(
//   "Digite m: matutino, v: vespertino, n: noturno "
// ).toLowerCase();

// dizTurno(turnoUsuario);

const gênero = prompt("Qual é o gênero do filme?") === "fantasia";
  const valor = Number(prompt("Qual é o valor do ingresso?")) > 15;

function filme(generoFilme, valorFilme) {
    if (generoFilme & valorFilme) {
      console.log("Bom filme");
    } else {
      console.log("Escolha outro filme");
    }
  }
  
  
  
  
  filme(
    gênero,
    valor
  );

















































