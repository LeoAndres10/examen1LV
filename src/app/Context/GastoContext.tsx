import { createContext } from "react";


export const GastoContext= createContext({
   autenticado: true as boolean,
   mensaje: '' as string,
   ingresar:(nombreUsuario : string, contraseña: string)=>{},
   presupuesto: 0 as number,
  gastado:0 as number,
  setPresupuesto: (value: number) =>{},
  agregarGasto: (value: number) =>{}
})