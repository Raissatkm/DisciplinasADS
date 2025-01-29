/*
O que são funções?
São blocos de códigos reutilizáveis.
Objetivo principal: Executar uma tarefa especifica num momento especifico evitando repetições desnecessárias dentro de escopo definido e com parâmetros especificos.

Exemplo 

let x= exemplo(2, 5)

function exemlo(a, b){
return a * b;
}


A importância de usar funções 

Entrada x 
        function f:
                    saida f(x)
Reutilzação do código 
abstração 
Modularidade
legibilidade
Manutenção
Escopo

FUNÇÕES REGULARES

funções definidas pela palavra function.

function nomeFuncao(parametro1, parametro2){
bloco de codigo para ser executado 
return algumValor;} o retorno é opicional 



*/

// Definindo outra função regular com dois parametros 
function soma(a, b){
    return a + b
} 

// Chamando a função soma e armazenamento o resultado em uma variável 
let resultado = soma(5, 10)

// exibindo o resultado da função 
console.log(resultado)

//Definição uma função regular usando a palavra-chave 'function'
function saudacao(nome){
    console.log("Olá, " + nome + "!" )
}
// Chamando a função saudacao
saudacao("Raissa Marques");

//Definindo uma função regular sem parâmetros  e sem retorno 
function mensagem(){
    console.log("Bem vindo ao curso JavaScript!");
}

// Chamando a função mensagem
mensagem()


/*
Funções anônimas 
Não possuem um nome diretamente associadas a elas.

let exemploFuncao = function(parametro1, parametro2){
bloco de código a ser executado}

*/ 

let resultadoo = somarParametros(5, 10);
console.log(resultadoo)

//Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2){
    console.log("\nExecutar a função passada como argumento ou parâmetro: ")
    return funcao(valor1, valor2)
}

// Passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 7, 3);
console.log(resultadoExecucao)

/* 
Função arrow 

Funções Seta são sintaxe Moderna e mais concisa, principalmente para casos de uso simples e call-backs.

let exemploDeFuncao = (parametro1, parametro2) => {}

let 




*/