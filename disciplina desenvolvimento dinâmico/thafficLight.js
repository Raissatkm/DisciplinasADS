// Função que recebe a cor do semáforo e decide a ação do pedestre

function checkTrafficLight(lightColor){

    switch(lightColor){
        case "vermelho":
            console.log("Não passe");
            break;
        case "verde":
            console.log("Passe");
            break;
        case "amarelo":
            console.log("Preparece para parar");
            break;
        default:
            console.log("cor inválida! aguarde até que o semáforo  esteja na cor válida");
}

    // pode atravesar a rua.
    //prepare para atravesar a rua 
    // pare! não atravesse a rua 
    // cor inválida! aguarde até que o semáforo  esteja na cor válida 

}
checkTrafficLight("verde")
checkTrafficLight("vermelho")
checkTrafficLight("amarelo")
checkTrafficLight("azul")
