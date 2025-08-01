//conexão dos elemento HTML ao JAVASCRIPT 
const turnOnOff = document.getElementById ('turnOnOff');
const lamp = document.getElementById ('lamp');

let ligadaPeloBotao = false;

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
            turnOnOff.textContent = 'Desligar';
            ligadaPeloBotao = true;
    }else{
        lampOff();
            turnOnOff.textContent = 'Ligar'
            ligadaPeloBotao = false;
    }
}

// eventos que eu quero 
turnOnOff.addEventListener ('click', lampOnOff );
lamp.addEventListener('mouseover', function(){
    if(!ligadaPeloBotao){
        lampOn();
    }
});
lamp.addEventListener('mouseleave', function(){
    if(!ligadaPeloBotao){
        lampOff();
    }
    
} );
lamp.addEventListener('dblclick', lampBroken );

// <------------------------------LAMPADA --------------------------------------->



document.addEventListener("DOMContentLoaded", function(){

    let numeroAtual = 0 
    
    const numeroNoHTML = document.getElementById('numero-atual')
    const botaoSoma = document.getElementById('botao-que-soma')
    const botaoSub = document.getElementById('botao-que-subtrai')


    function atualizaNumeroNoHTML(){
        numeroNoHTML.textContent = numeroAtual
        clicandoPpt();//  chamando a função toda vez que o numero atualiza 
    }

    function clicandoPpt(){
        if(numeroAtual === 1){
            const playerRock = document.querySelector('.player-options [opt="rock"]');
                if(playerRock){
                    playerRock.click();
                }
        }else if(numeroAtual === 2){
            const playerpapper = document.querySelector('.player-options [opt="papper"]');
                if(playerpapper){
                    playerpapper.click();
                }
        }else if(numeroAtual === 3){
            const playerscisor = document.querySelector('.player-options [opt="scisor"]');
            if(playerscisor){
                playerscisor.click()
            }
        }
        
    }
    botaoSoma.addEventListener('click', ()=>{
        numeroAtual++
        if(numeroAtual > 3){
            numeroAtual = 3
        }
        atualizaNumeroNoHTML()
    })

    botaoSub.addEventListener('click', ()=>{
        numeroAtual -= 1
         if(numeroAtual < -3){
            numeroAtual = -3
        }
        atualizaNumeroNoHTML()

        
    })
    

} )


// <----------------------------CONTADOR--------------------------------------->



//Seleção dos elementos
let elementos = document.querySelectorAll('.player-options div > img');
let playerOpt = "";
let inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor');

    if(playerOpt == "papper"){
        if(inimigoOpt == "papper"){
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "scisor"){
            vencedor.innerHTML = "IA Venceu"
        }else if(inimigoOpt == "rock"){
            vencedor.innerHTML = "Player Venceu"
        }
    }

     if(playerOpt == "rock"){
        if(inimigoOpt == "rock"){
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "scisor"){
            vencedor.innerHTML = "Player Venceu"
        }else if(inimigoOpt == "papper"){
            vencedor.innerHTML = "IA Venceu"
        }
    }

     if(playerOpt == "scisor"){
        if(inimigoOpt == "scisor"){
            vencedor.innerHTML = "Empate"
        }else if(inimigoOpt == "papper"){
            vencedor.innerHTML = " Player Venceu"
        }else if(inimigoOpt == "rock"){
            vencedor.innerHTML = "IA Venceu"
        }
    }


     //alert(playerOpt); papper / scisor / rock
    //alert(inimigoOpt);
}


function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(let i = 0;i < enemyOptions.length; i++){
       enemyOptions[i].childNodes[0].style.opacity = 0;
    }
}

// math.floor funcionando como uma "IA"
function inimigoJogar(){
    let rand = Math.floor(Math.random()*3.3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');

    resetInimigo();
    for(let i = 0;i < enemyOptions.length; i++){
        
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
   
}

//apos selecionar opção some as outras 
function resetOpacityPlayer(){
   for(let i = 0;i < elementos.length; i++){
        elementos[i].style.opacity = 0;
   }
}

//Call back inicio do game 
for(let i = 0;i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
            t.target.style.opacity = 1;
            playerOpt = t.target.getAttribute('opt');


        inimigoJogar();
       //alert(playerOpt) teste
    });
    
}
