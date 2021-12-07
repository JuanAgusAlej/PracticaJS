
/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
El tema es que es una cadena de texto y es muy difícil de leer 😱. 
¡Menos mal que han puesto cada regalo separado por espacio!
(aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra,
por ejemplo _playstation, que significa que está tachado y no se tiene que contar.
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
const carta = 'bici coche balón _playstation bici coche peluche'
Al ejecutar el método debería devolver lo siguiente:
const regalos = listGifts(carta)
console.log(regalos)

{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

const carta = '    bici    coche       balón      _playstation      bici          coche       peluche   '

const listGifts = function (carta) {
 
  const contenido = carta.split(" ")
  
  //elimina los espacios y los regalos tachados
  for (let i = 0; i < contenido.length; i++) {
      
    if (contenido[i].includes("_")) {
      contenido.splice(i,1)      
    }
    if (!contenido[i]) {
      contenido.splice(i, 1)
      i--
    }
        
  }

  //crea el arreglo con la cantidad de objetos
  let nuevoContenido = contenido.map(function (regalo, i) {
    const filtro = contenido.filter(function (repetido,j) {
      
      if (repetido === regalo && i<j) {
        return repetido
      } else if (repetido === regalo && i > j) {
        contenido.splice(j, 1)
       
      }
      
    })
    
    return [contenido[i], filtro.length+1]

} )

  //elimina los espacion vacios del arreglo
for (let i = 0; i < nuevoContenido.length; i++) {
  
  if (!nuevoContenido[i]) {
    nuevoContenido.splice(i, 1)
    i--
  }
      
  }
  //crea el objeto
const obj = Object.fromEntries(nuevoContenido)

  return obj
}


const regalos = listGifts(carta)
console.log(regalos)

/*
Array(8) [ "bici", "coche", "balón", "_playstation", "", "bici", "coche", "peluche" ]
​
0: "bici"
​
1: "coche"
​
2: "balón"
​
3: "_playstation"
​
4: ""
​
5: "bici"
​
6: "coche"
​
7: "peluche"
​
length: 8
​
<prototype>: Array []
*/