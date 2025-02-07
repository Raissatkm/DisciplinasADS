function verificarCasa(casa){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const sucesso = Math.random() > 0.5;
            if(sucesso){
        resolve(`A casa localizada em ${casa.endereco} está em boas condicões!`)
    }else{
        reject(`A casa localizada em ${casa.endereco} está em más condicões`)
    }
    
    }, 2000); 
});
}