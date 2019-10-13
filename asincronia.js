/*
    * * * * * * * * * * *
    *  3. ASINCRONIA    *
    * * * * * * * * * * *
En este ejercicio se comprobará la competencia de los alumnos en el concepto de asincronía. 

Se proporcionan 3 archivos  csv separados por comas y se deberán bajar así­ncronamente (promises) 

A la salida se juntarán los registros de los 3 archivos en un array que será 
el parámetro de entrada de la funcion findIPbyName (array, name ,surname) que buscará 
una entrada en el array y devolverá la IP correspondiente. 

Una vez hallada la IP ha de mostrarse por pantalla. 

Para llamar a la función utilizad el nombre Cari Wederell

*/

const axios = require('axios');
const fs = require('fs');
const fsPromises = fs.promises;

// Por el tipo de datos consideré que sería mejor generar un Json Object que un array
// No he sido capaz de identificar el error para poder utilizar los datos
// Tampoco sabía cómo integrar los 3 CSV, por lo tanto, estaba haciendo pruebas solo con el primero

fsPromises.readFile('../files/MOCK_DATA1.csv')
.then((data) => {
    function csvJson(csv) {
        const lines = csv.split('\n'); 
        let result = []; 
        const headers = lines[0].split(',')
        for (let i=0;i<lines.length;i++) {
            const obj = {}; 
            const currentline = lines[i].split(','); 
    
            for (var j=0; j<headers.length;j++) {
                obj[headers[j]] = currentline[j]; 
            }
            result.push(obj); 
        }
        return JSON.stringify(result); 
      }
      return Promise.all
})
.catch((err) => {
  console.log(err)
})




 

/*
fsPromises.readFile('/files/MOCK_DATA2.csv')
fsPromises.readFile('/files/MOCK_DATA3.csv')
*/