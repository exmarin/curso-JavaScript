// Solicita al usuario que ingrese su nombre y lo almacena en la variable 'nombre'
let nombre = prompt('¿Cuál es tu nombre?'); 

// Solicita al usuario que ingrese su rol y lo almacena en la variable 'rol'
let rol = prompt('¿Cuál es tu rol?');

// Genera un número aleatorio entre 1 y 1000 y lo almacena en la variable 'id'
let id = Math.floor(Math.random() * 1000) + 1;

// Imprime en la consola el nombre y el rol del usuario
console.log( nombre + ' ' + 'rol: '+ rol  ); // ''

// Imprime en la consola un mensaje de bienvenida que incluye el nombre, el rol y el ID temporal del usuario
console.log( `Bienvenido/a, ${ nombre }, como ${ rol } a Moodle! Tu ID temporal es: ${ id }` );