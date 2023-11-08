// consoleCervezas.js
// antes: function(variable){}
// ahora: (variable)=>{}
import { cervezasBD } from '../bd/cervezasBD.js'
export const consoleCervezas = (cervezasBD) => {
  cervezasBD.forEach(element => {
    console.log('Nombre: ', element.nombre)
  })
}
