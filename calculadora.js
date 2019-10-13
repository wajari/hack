/*  
    * * * * * * * * * * * * * * * *
    *  1. C A L C U L A D O R A   *
    * * * * * * * * * * * * * * * *    

Crea un programa que permita realizar sumas, restas, multiplicaciones y divisiones. 

- El programa debe recibir dos números (n1, n2).

- Debe existir una variable que permita seleccionar de alguna forma el tipo de operación 
(suma, resta, multiplicación o división).

- Opcional: agrega una operación que permita elevar n1 a la potencia n2.
*/

function calculadora(num) {
    return {
        answer: parseFloat(num) ? parseFloat(num) : 0,
        equals: function () {
            return answer
        },
        suma: function (num) {
            answer += num ? num : 0
            return answer
        },
        resta: function (num) {
            answer -= num ? num : 0
            return answer
        },
        multiplica: function (num) {
            answer *= num ? num : 0
            return answer
        },
        divide: function (num) {
            answer /= num ? num : 0
            return answer
        },
        /* Traté de agregar la operación de la potencia con Math.pow pero no he logrado 
        implementarlo en la función */
        potencia: function (num) {
            answer = Math.pow(num, num);
            return answer
        },
    }
}

console.log(calculadora(50/2)); 

/* Notas: Solo hay que llamar la función calculadora y poner los valores deseados. 
No hace falta una variable para el operador. Podéis usar el símbolo: suma, resta
multiplicación o división y funciona en todas las pruebas realizadas, incluyendo decimales*/