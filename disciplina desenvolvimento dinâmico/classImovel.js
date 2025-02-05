class Imovel {
    constructor(endereco, tamanho) {
        this.endereco = endereco;
        this.tamanho = tamanho;

    }
    descrever(){
        throw new Error("Este método deve ser implementado por subclasses")
        
    }

}

class casa extends Imovel{
    constructor(endereco, tamanho, quartos, banheiros, garagem) {
        super(endereco, tamanho);
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.garagem = garagem;


    }

    descrever(){
        let descricao = `Casa localizada em ${this.endereco}, 
        com  ${this.quartos}, com o tamanho de ${this.tamanho}m², ${this.banheiros} `

       // operador ternário 
        descricao += this.temGaragem? "e possui garagem.": "e não possui garagem "
        return descricao;
    }
}

class casa extends Imovel{
    constructor(endereco, tamanho, quartos, banheiros, garagem) {
        super(endereco, tamanho);
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.garagem = garagem;


    }

    descrever(){
        let descricao = `Casa localizada em ${this.endereco}, 
        com  ${this.quartos}, com o tamanho de ${this.tamanho}m², ${this.banheiros} `

       // operador ternário 
        descricao += this.temGaragem? "e possui garagem.": "e não possui garagem "
        return descricao;
    }
}