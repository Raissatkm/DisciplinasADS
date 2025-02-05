class Casa {
    // construtor define as propriedades da classe 
    constructor(cor, numQuarto, temGaragem){
        this.cor = cor;
        this.numQuarto = numQuarto;
        this.temGaragem = temGaragem;


    } 



    // método para descrever a casa 
    descrever(){
        let descrever = `Está casa tem a cor ${this.cor}, tem ${this.numQuarto} quartos...`;
        if (this.temGaragem){
            descrever += `e tem garagem.`;
        }else{
            descrever += `e não tem garagem.`;
        }
        return descrever;

    }
}
const minhaCasa = new Casa("Azul", 5, true);
const suaCasa = new Casa("Verde", 7, false);

console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());


class CasaLuxuosa extends Casa {
    constructor(cor, numQuarto, temGaragem, temPiscina){
        // chama o construtor da casa base 
        super(cor, numQuarto, temGaragem);
        // chama a propriedade adicional 
        this._temPiscina = temPiscina;
    
    }
    get temPiscina(){
        return this._temPiscina;

    } 
    set temPiscina(novaPiscina){
        this._temPiscina = novaPiscina;
    }
    // método para descrever a casa luxuosa
    descrever(){
        let descricao = super.descrever();
        if (this._temPiscina){
            descricao += `Também tem uma piscina.`;
        }else{
            descricao += `Não tem piscina.`;
        }
        return descricao;

}}

const minhaCasaLuxuosa = new CasaLuxuosa("azul", 3, true, false);
console.log(minhaCasaLuxuosa.descrever());