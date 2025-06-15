const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

//conexão dos elemento HTML ao JAVASCRIPT 

function lampOn(){
    lamp.src = './img/ligada.jpg'
}

function lampOff(){
    lamp.src = './img/desligada.jpg'
}


turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener('click', lampOff)