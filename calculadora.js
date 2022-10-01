let valorUno;
let valorDos;
let operacion;
let pantalla = document.getElementById('pantalla');
const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');

const separador = document.getElementById('separador');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');

let resolver = document.getElementById('resolver');
const resetear = document.getElementById('resetear');


// Digitos
num0.addEventListener('click', ()=>{
    pantalla.textContent = pantalla.textContent + '0';
})
num1.addEventListener('click',()=>{
    pantalla.textContent = pantalla.textContent + '1';
})

num2.addEventListener('click',() => {
    pantalla.textContent = pantalla.textContent + '2';
})
num3.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent + '3';
})
num4.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent + '4';
})
num5.addEventListener('click', () => {
    pantalla.textContent =  pantalla.textContent + '5';
})
num6.addEventListener('click', () => {
    pantalla.textContent =  pantalla.textContent + '6';
})
num7.addEventListener('click', () => {
    pantalla.textContent =  pantalla.textContent + '7';
})
num8.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent + '8';
})
num9.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent + '9';
})
separador.addEventListener('click', () => {
    pantalla.textContent = pantalla.textContent + '.';
})

// Operaciones
sumar.addEventListener('click', () =>{
    valorUno = pantalla.textContent;
    operacion = '+';
    limpiar();
})
restar.addEventListener('click', () => {
    valorUno = pantalla.textContent;
    operacion = '-';
    limpiar();
})
multiplicar.addEventListener('click', () => {
    valorUno = pantalla.textContent;
    operacion = '*';
    limpiar();
})
dividir.addEventListener('click', () => {
    valorUno = pantalla.textContent;
    operacion = '/';
    limpiar();
})
resolver.addEventListener('click', () => {
    valorDos = pantalla.textContent;
    resultado();
})
resetear.addEventListener('click', () => {
    valorUno = 0;
    valorDos = 0;
    operacion = '';
    limpiar();
})

function resultado (){
    let res = 0;
    switch(operacion){
        case '+':
            res = parseFloat(valorUno) + parseFloat(valorDos);
            break;
        case '-':
            res = parseFloat(valorUno) - parseFloat(valorDos);
            break;
        case '*':
            res = parseFloat(valorUno) * parseFloat(valorDos);
            break;
        case '/':
            res = parseFloat(valorUno) / parseFloat(valorDos);
            break;
    }
    pantalla.textContent = res;
}

function limpiar (){
    pantalla.textContent = '';
}























