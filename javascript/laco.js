let penultimo = 0
let ultimo = 1
let proporcao = 0 

const ciclosDesejados = 20 
/*
for(let contador = 0;contador <= ciclosDesejados; contador++){
    let proximo = penultimo + ultimo
    penultimo = ultimo
    ultimo = proximo

    console.log(proximo)

    if(contador < 0){
        proporcao = ultimo / penultimo
    }
}

*/

let contador = 0

while(contador <= ciclosDesejados){

     let proximo = penultimo + ultimo
    penultimo = ultimo
    ultimo = proximo

    console.log(proximo)

    if(contador < 0){
        proporcao = ultimo / penultimo
    }
    contador++
}

console.log(proporcao)