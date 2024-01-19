let numeroSecreto = 0; //esta variable de numero secreto no es afectado por repetirlo por el alcanze de bloque pero se cambiara a otro nombre para no causar confuncion
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){//se definen dos parametros 
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;//aqui se puso return por buena practica de mostrar a donde se regresa
}
 function VerificarIntento() {//aqui se declara la funcion del cuerpo y en html llama a la funcion que se define en java 
 let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

 if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute ('disabled');
} else{
    if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p','el numero secreto es menor');
    } else{
        asignarTextoElemento('p','el numero es mayor');
    }
    intentos++;
    limpiarCaja();
 }


 return;
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value= '';
   // valorcaja.value= ''; esto es una forma pero mejor se reduce a;adiendo arriba
}
 function generarNumeroSecreto(){ //aqui se regresara el valor 
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaDeNumerosSorteados);
//si ya sorteamos todos los numeros
if (listaDeNumerosSorteados.length == numeroMaximo) {
  asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
} else{

 //si el numero generado esta incluido en la lista 
 if(listaDeNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();//recursividad
 }else{
  listaDeNumerosSorteados.push(numeroGenerado)

  return numeroGenerado;
 }
 }
 }

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del super numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;



}

function ReiniciarJuego(){
    //aqui se limpiara la caja de reinicio de juego
  limpiarCaja()
    //generar numero aleatorio
  condicionesIniciales();
    //desabilitar  el boton de nuevo juego
    //iniciar el numero de intentos
  document.querySelector('#reiniciar').setAttribute('disabled','true');


}
condicionesIniciales();