// Manipulação de  dados json 

// Objeto Json inicial 

let pessoa = {
    "nome": 'João',
    "idade": 25,
    "endereco": {
        "rua": "Rua 1",
        "numero": 10,
        "bairro": "Centro"

    },
    "telefones": ["71172227", "87654432"]
};

console.log(pessoa);

// acessar dados 
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa.telefones[0]); // acessar o primeiro elemento do array telef

/// adicionar dados 
pessoa.email = "joaotkm17@gmail.com"
console.log(pessoa.email)

// modificar dados 
pessoa.idade = 32
console.log(pessoa)

// remover dados 

delete pessoa.telefones;
console.log(pessoa.telefones); 
console.log(pessoa)

// operações com Array

pessoa.hobbies = ["Leitura, esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

// interar sobre as propriedades do objeto 

for (let propriedade in pessoa) {
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}

// converter de e para json 
let pessoaJson = JSON.stringify(pessoa);
console.log(pessoaJson)

let objetoPessoa = JSON.parse(pessoaJson);
console.log(objetoPessoa)