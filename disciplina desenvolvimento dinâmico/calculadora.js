// Função que simula a operação de uma calculadora
function calculadora(num1, num2){


    let adicao = num1 + num2;
    let subtracao = num1 - num2;
    let multiplicacao = num1 * num2;
    let divisao = num1 / num2;
    let modulo = num1 % num2;
    let exponencial = num1 ** num2;

    //Incrementor e decremento 
    let incrementar = num1;
    incrementar++;

    // Decrementar 
    let decrementar = num1;
    decrementar--;

    // operação aritmética básicas 
    console.log(`adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`incrementar (${num1})++ = ${incrementar}`);
    console.log(`decrementar (${num1})-- = ${decrementar}`);
}

    // Execultar  a função calculadora 

calculadora(10, 5);