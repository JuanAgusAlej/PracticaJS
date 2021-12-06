/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.
*/


function contarOvejas() {
    // aquí tu magia
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'}
      ]
     
      let ovejasFiltradas = []
     
    for (let i = 0; i < ovejas.length; i++) {
    
        /*console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
        for (const key in ovejas[i]) {
            console.log(`${key} : ${ovejas[i][key]}`)
            
        }*/
        if (ovejas[i].color.includes("rojo")){
           console.log(ovejas[i].name)
         
            
            if (ovejas.find(function (ovejas) {
                return ovejas.name.toUpperCase() === "NA"
              })) {
                console.log(ovejas[i])
                ovejasFiltradas.push(ovejas[i])
            }
        }
        
      }
     // return ovejasFiltradas
    
  }

