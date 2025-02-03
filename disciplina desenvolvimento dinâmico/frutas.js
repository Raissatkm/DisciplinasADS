let frutas = "maça, banana, uva, laranja, abacate, abacaxi";
console.log('Tamanho da string frutas', frutas.length)

// obtendo o resultado apenas da  banana, laranja e uva
let frase = "Olá, mundo!"
let parteDafrase = frase.slice(5, 10);
console.log('parteDafrase', parteDafrase)

// método trim() 

let frutasComEspaco = "     Morango ";
// Queremos remover o espaço em brando do início e no final 
console.log('frutasComEspaco:', frutasComEspaco.trim())

// método split()
let listaDeFrutas = "Morango,laranja,abacate,maça,acerola";
// dividindo a string em um array de strings
let listaDeFrutasArray = listaDeFrutas.split(',');
console.log('Resultado do split:', listaDeFrutasArray)

// 

let animal1 = "gato";
let animal2 = "cachorro";
let animal3 = "Girafa";

// exemplo do método substring()
// pega parte da string "Elefante ", começando do índice 3 até o índice 7
let parteAnimal1 = animal1.substring(0, 3); 
console.log('Resultado substring:', parteAnimal1)

// exemplo método replace()
// Substitui a subtring 'ra' por 're' em "Girafa"
let novoAnimal3 = animal3.replace("ra", "re");
console.log('Resultado replace:', novoAnimal3)

// exemplo do método concat() 
let animaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log('Resultado concat:', animaisJuntos)

/// método toloweCase() para converter todas os caracteres alfabéticas para minúsculas 

let nome = "Raissa Marques";
let nomeMinusculo = nome.toLowerCase();
console.log('Resultado toLowerCase:', nomeMinusculo)

// método toUpperCase() para converter todas as caracteres alfabéticas para maiúsculas
let nomeMaiusculo = nome.toUpperCase();
console.log("Resultado toUpperCase:", nomeMaiusculo);
