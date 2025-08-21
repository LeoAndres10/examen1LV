import { createContext } from "react";
import { Gasto } from "../Modelos/Gasto";


export const GastoContext= createContext({
   autenticado: true as boolean,
   mensaje: '' as string,
   ingresar:(nombreUsuario : string, contraseña: string)=>{},
   presupuesto: 0 as number,
  gastado:0 as number,
  cambiarPresupuestoValor: (value: number) =>{},
  agregarGasto: (value: number) =>{},
  gastos:[] as Gasto[],
  agregarGastoPresupuesto:(gasto:Gasto)=>{}
})