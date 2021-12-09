
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
  

  
  //Crea un arreglo con los objetos que no tienen _ y no estan vacios
  const sinEspacios = arreglo.filter(function(array){
    return array !== "" && !array.includes("_");
  });

  //objeto vacio
  let repetidos = {};

  //crea un obejot con los datos guardados sin repiticion
  sinEspacios.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });


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