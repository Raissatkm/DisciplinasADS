let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("Andei de bicicleta por", tempoDeAndar, "minutos...");

    if(tempoDeAndar === 3){
        caiu= true;
    }


}while (!caiu && tempoDeAndar < 10);
