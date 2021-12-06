
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

