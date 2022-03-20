// 1 - Pipoca 10 
// 2 - Macarrão 
// 3 - Carne 
// 4 - Feijão 
// 5 - Brigadeiro 

// const comida = Number
// const tempo = Number
const tempoPipoca = 10
const tempoMacarrao = 8
const tempoCarne = 15
const tempoFeijao = 12
const tempoBrigadeiro = 8

function microondas (comida, tempo){

    //pipoca

    if (comida == 1 && tempo < tempoPipoca)
        console.log("tempo insuficiente")  
   
    else if (comida == 1 && tempo >= (2 * tempoPipoca))
        console.log("comida queimou")

    else if (comida == 1 && tempo >=(3 * tempoPipoca))
        console.log("kabumm")

    //macarrao

    else if (comida == 2 && tempo < tempoMacarrao)
        console.log("tempo insuficiente")  

    else if (comida == 2 && tempo >= (2 * tempoMacarrao)) 
        console.log("comida queimou")

    else if (comida == 2 && tempo >= (3 * tempoMacarrao))
        console.log("kabumm")
    
    //carne

    else if (comida == 3 && tempo < tempoCarne)
        console.log("tempo insuficiente")  

    else if (comida == 3 && tempo >= (2 * tempoCarne)) 
        console.log("comida queimou")

    else if (comida == 3 && tempo >= (3 * tempoCarne))
        console.log("kabumm")
    
    //feijão

    else if (comida == 4 && tempo < tempoFeijao)
        console.log("tempo insuficiente")  

    else if (comida == 4 && tempo >= (2 * tempoFeijao)) 
        
    console.log("comida queimou")
    else if (comida == 4 && tempo >= (3 * tempoFeijao))
        console.log("kabumm")

    //brigadeiro

    else if (comida == 5 && tempo < tempoBrigadeiro)
        console.log("tempo insuficiente")  

    else if (comida == 5 && tempo >= (2 * tempoBrigadeiro)) 
        console.log("comida queimou")

    else if (comida == 5 && tempo >= (3 * tempoBrigadeiro))
        console.log("kabumm")
    
    else if (comida > 5)
        console.log("prato inexistente")
    
console.log("Prato pronto, bom apetite!!!")
}

microondas (6, 32);
