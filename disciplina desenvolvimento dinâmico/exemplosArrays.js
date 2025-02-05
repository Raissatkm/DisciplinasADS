// criar um array 

let array1 = [];
let array2 = new Array();
let array3 = Array(); // pode ser usado tanto new quanto sem new

console.log("array1: ", array1 )
console.log("array2: ", array2 )


// adicionando elementos dentro do array []
// adicionando elementos dentro do array new Array()
// metodo push 
array1.push('banaba');
array2.push('laranja');
array3.push('jujuba')
console.log("array1: ", array1)
console.log("array2:", array2)
console.log("array3:", array3)

//

let frutas = ["maça", "banana", "morango"];
console.log("frutas:", frutas);
console.log("Comprimento do array", frutas.length)

// usando método push 
let novoComprimento = frutas.push("laranja");
console.log("frutas:", frutas);

// usando o método pop() para remover o ultimo elemento 

let ultimaFruta = frutas.pop();
console.log("Ultima fruta:", frutas)

// usando método shift() para remover o primeiro elemento do array
let primeiroFruta = frutas.shift();
console.log("Primeira fruta:", frutas)
