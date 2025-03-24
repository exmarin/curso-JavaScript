let a = 15;
if(a >= 10){
    console.log('A es mayor o igual a 10', 'su valor es: ', a); 

}else{
    console.log('A es menor a 10', 'su valor es: ', a);
}
console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if(dia === 0){
    console.log('Domingo');  
}else if(dia === 1){
    console.log('Lunes');   
}

//sin usar if else, o switch, unicamente objetos
dia = 4;
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};

console.log(diasLetras[dia] || 'Dia no definido');