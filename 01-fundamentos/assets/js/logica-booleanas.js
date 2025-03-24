const regresaTrue = () => {
    console.log('Regresa true');
    return true;    
}

const regresaFalse = () => {
    console.log('Regresa False');
    return true;    
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true
console.log( !regresaFalse() ); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( false && true ); // false

console.log( regresaFalse() && regresaTrue() ); // false

console.warn('OR'); // true si alguno de los valores es verdadero
console.log( true || false ); // true
console.log( false || true ); // true
console.log( regresaFalse() || regresaTrue() ); // true

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false
const a3 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Ya no soy falso de nuevo
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // true