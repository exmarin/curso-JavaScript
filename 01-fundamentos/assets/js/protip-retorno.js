// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }   
// }

 const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Exequiel ', 'Marin');
console.log(persona); // { nombre: 'Exequiel ', apellido: 'Marin' }

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
    // console.log(args);
    return args;
}

const argumentos =  imprimeArgumentos2(10, true, false, 'Exequiel ', 'Marin');
console.log(argumentos); // [ 10, true, false, 'Exequiel ', 'Marin' ]