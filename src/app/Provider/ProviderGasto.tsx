import { useContext, useState } from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { GastoContext } from "../Context/GastoContext";

 export default function ProviderGasto({children}: Plantilla){
  const [autenticado, setAutenticado] = useState(false);
  const [mensaje, setMensaje] = useState('');
const [presupuesto, setPresupuesto] = useState(0);
  const [gastado, setGastado] = useState(0);

  const setBudget = (value: number) => {
    setGastado(value);
    setPresupuesto(0); 
  };

  function agregarGasto(valor: number) {
    setGastado((anterior) => anterior + valor);
  };

  async function ingresar(nombreUsuario: string, contraseña: string) {
    try {
      const respuesta = await fetch('/gasto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombreUsuario, contraseña}),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        setAutenticado(true);
        setMensaje('✅ ' + data.message);
      } else {
        setAutenticado(false);
        setMensaje('❌ ' + data.message);
      }
    } catch (error) {
      setAutenticado(false);
      setMensaje('Error en el servidor' + error);
    }
  };

  return (
    <GastoContext.Provider value={{ presupuesto,ingresar,setPresupuesto,autenticado,gastado, mensaje,agregarGasto }}>
      {children}
    </GastoContext.Provider>
  );
};

export function useGasto(){
    return useContext(GastoContext)
}