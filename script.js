//conexão dos elemento HTML ao JAVASCRIPT 
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

//funçoes 

function isLampBroken(){
    
    return lamp.src.indexOf ('quebrada') > -1 
    
}

function lampOn(){
    if ( !isLampBroken ()) {
    lamp.src = './img/ligada.jpg'
     }
}

function lampOff(){
      if ( !isLampBroken ()) {
    lamp.src = './img/desligada.jpg'
      }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg'
}

function lampOnOff(){
    if( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar'
    }
}

// eventos que eu quero 
turnOnOff.addEventListener ('click', lampOnOff );
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick', lampBroken );

// <------------------------------LAMPADA --------------------------------------->



document.addEventListener("DOMContentLoaded", function(){

    let numeroAtual = 0 

    const numeroNoHTML = document.getElementById('numero-atual')
    const botaoSoma = document.getElementById('botao-que-soma')
    const botaoSub = document.getElementById('botao-que-subtrai')


    function atualizaNumeroNoHTML(){
        numeroNoHTML.textContent = numeroAtual
    }

    botaoSoma.addEventListener('click', ()=>{
        numeroAtual++
        atualizaNumeroNoHTML()
    })

    botaoSub.addEventListener('click', ()=>{
        numeroAtual -= 1
        atualizaNumeroNoHTML()
    })

    atualizaNumeroNoHTML()

} )