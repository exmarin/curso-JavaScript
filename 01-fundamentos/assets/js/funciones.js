
function saludar (nombre){
    console.log('Hola ' + nombre);
}

const saludar2 = function (nombre){
    console.log('Hola ' + nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar("Exequiel");  
saludar2("Exequiel");
saludarFlecha("Exequiel");

function sumar(a, b){
    return a + b;
}   

// const sumar2 = (a, b) => {
//     return a + b;
// }   

const sumar2 = (a, b) =>  a + b;

// function getAleatorio(){
//     return Math.random();
// }

const getAleatorio2 = () => Math.random();


console.log(getAleatorio2())