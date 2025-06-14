const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

//conexão dos elemento HTML ao JAVASCRIPT 

function lampOn(){
    lamp.src = './img/ligada.jpg'
}


turnOn.addEventListener ('click', lampOn)