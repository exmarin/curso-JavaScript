/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes) 
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntoJugador = 0;
let puntosComputadora = 0;

//Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computador-cartas')

const puntosHTML = document.querySelectorAll('small');
console.log(btnPedir);
// Esta función crea un nuevo deck
const crearDeck = () => {
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ){
            deck.push(i + tipo);
        }
    }

    for( let tipo of tipos ){
        for( let esp of especiales ){
            deck.push(esp + tipo);
        }
    }
    
    deck = _.shuffle(deck);
    console.log(deck);
   
    
}
crearDeck();
// Esta función me permite tomar una carta
const pedirCarta = () =>{
    //console.log(deck);
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();
const valorCarta = ( carta ) =>{
   
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}

//Turno computadora
const turnoComputadora = (puntosMinimos) => {

    do {
    const  carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
    console.log(puntosComputadora);

    // <img class="cartas" src="assets/cartas/10D.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasComputadora.append(imgCarta);

    if(puntosMinimos > 21){
        break;
    }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 )) 
        
    setTimeout(() =>{    
        if (puntosComputadora === puntosMinimos) {
        alert('Nadie gana');
    }else if (puntosMinimos > 21){
        alert('Computadora gana')
    } else if (puntosComputadora > 21){
        alert('Jugador Gana');
    }else{
        alert('Computador Gana');
    }
}, 10);


}


//Eventos
btnPedir.addEventListener('click', () => {

    const  carta = pedirCarta();
    puntoJugador = puntoJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntoJugador;
    console.log(puntoJugador);

    // <img class="cartas" src="assets/cartas/10D.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');

    divCartasJugador.append(imgCarta);

    if(puntoJugador > 21){
        console.warn('Perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntoJugador);
        console.log("Gano la computadora")
    }else if ( puntoJugador === 21){
        console.warn('21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }

})

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;


    turnoComputadora(puntoJugador);

})

btnNuevo.addEventListener('click', () => {

    console.clear();
    btnPedir.disabled = false;
    btnDetener.disabled = false;

     // Reiniciar valores
     puntoJugador = 0;
     puntosComputadora = 0;
     puntosHTML[0].innerText = 0;
     puntosHTML[1].innerText = 0;
 
     // Limpiar cartas en pantalla
     divCartasJugador.innerHTML = '';
     divCartasComputadora.innerHTML = '';
 
     // Crear nuevo deck
     deck = [];
     crearDeck();

    

})
