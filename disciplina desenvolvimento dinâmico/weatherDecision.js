/// Variavel que representar a previsão de tempo 
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "cloudy" (nublado)


let weatherForecast = "cloudy";

// analogia com a vida real: Decidindo se devemos levar um guarda chuva 

if(weatherForecast === "rainy"){
    console.log("Leve um guarda chuva");
} else if(weatherForecast === "cloudy"){
    console.log("Leve um guarda chuva, só por segurança ");

} else {
    console.log("Não é necessário levar um guarda chuva");

}