const loja1 = [100, 200, 300, 500]
const loja2 = [150, 250, 350]
const loja3 = [50, 650,]

const venda = [...loja1, ...loja2, ...loja3]

let valorTotal = 0

    //for( let index = 0; index < venda.length; index++){
    //const valortAtual = venda[index]
    //valotTotal += valortAtual}

    //for( let valortAtual of venda){
         //valorTotal += valortAtual}
    
    venda.forEach(( valortAtual, index)=>{
        valorTotal += valortAtual
    })

console.log(valorTotal);