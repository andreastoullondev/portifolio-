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

function lampOnOff

//elementos 
turnOnOff.addEventListener ('click', lampOnOff );
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick', lampBroken );