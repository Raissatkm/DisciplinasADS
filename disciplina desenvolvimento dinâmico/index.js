/*Fundamentos javascript
variaveis: palavras chave var, let ou const.
operadores: aritméticos, atribuição, comparação e lógico.
estruturas de controle: laçõs de repetição, loop
funções:blocos de codigos reutilizáveis
objetos: entidades do mundo real e propriedades 


var: o escopo varia sendo de uma função ou global
let: O escopo é de bloco 
const: Valor fixo

Anatoção de codigo 
Objetivo único de explicar rapidamente e/ ou  documentar.
//



*/

function somar(a, b){
    return a + b;

}

let resultadoSomar = somar;
console.log(resultadoSomar(5, 5)); 


const frase = "Olá, Eu sou uma constante global";

function exemploVar(){
    if(true){
        var mensagem= "Olá, Faculdade descomplica! Eu sou uma var...."
    }
    console.log(mensagem);
}

exemploVar();



function exemploLet(){
    if(true){
        let mensagem= "Olá, mundo!"
        console.log(mensagem)
    }
}
exemploLet()


function exemploConstante(){
  const mensagem = "olá, Faculdade descomplica!";
  console.log(mensagem);
}

exemploConstante()