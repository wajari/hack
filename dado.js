/* 
    * * * * * * * * * * * * * * * * * * * * *
    *  2. D A D O   E L E C T R Ó N I C O   *
    * * * * * * * * * * * * * * * * * * * * *
     
Simula el uso de un dado electrónico cuyos valores al azar irían del 1 al 6. 
    
- Crea una variable "totalScore" en la que se irá almacenando la puntuación total 
tras cada una de las tiradas. 

- Una vez alcanzados los 50 puntos el programa se detendrá y se mostrará un mensaje que indique 
el fin de la partida.

- Debes mostrar por pantalla los distintos valores que nos devuelva el dado 
(números del 1 al 6) así como el valor de la variable "totalScore" tras cada una de las tiradas. 

*/
/* Solución no iterable porque no estoy haciendo el cálculo aleatorio en un array
No encontré la forma de poder acumular los valores en un array para que cumplieran la condición 
del máximo valor de la suma de los mismos

let totalScore = []; 
let valorDados = Math.floor(Math.random() * (6 - 1)) + 1;
let sumatoriaDados = 0; 

for (value of valorDados) {
    while (valorDados < 50) {
        continue
    } if (valorDados > 50) {
        return ("¡Game over my friend!");
    }
}

console.log(valorDados); 
console.log(sumatoriaDados); 

*/

function dado (min, max) {
    return Math.floor(Math.random() * (max - min)) + 1; 
}

let totalScore = dado.value + dado.value; 

if (totalScore >= 50) {
    console.log("¡Game over my friend!")
}

console.log(dado(1,6)); 