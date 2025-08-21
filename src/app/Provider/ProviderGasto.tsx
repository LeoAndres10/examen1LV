import { useContext, useEffect, useState } from "react";
import { Plantilla } from "../Modelos/Plantilla";
import { GastoContext } from "../Context/GastoContext";
import { Gasto } from "../Modelos/Gasto";

 export default function ProviderGasto({children}: Plantilla){
  const [autenticado, setAutenticado] = useState(false);
  const [mensaje, setMensaje] = useState('');
const [presupuesto, setPresupuesto] = useState(0);
  const [gastado, setGastado] = useState(0);
const [gastos, setGastos] = useState<Gasto[]>([]);

  async function cambiarPresupuestoValor(value: number) {
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

  

  async function cargarGastos() {
    try {
      const respuesta = await fetch('http://localhost:5000/gasto');
      const data = await respuesta.json();
      setGastos(data);
    } catch (error) {
      console.error('Error al cargar gastos', error);
    }
  };

  async function agregarGastoPresupuesto(gasto: Gasto) {
    try {
      await fetch('http://localhost:5000/gasto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoria: gasto.categoria,
          monto: gasto.monto,
          fecha: gasto.fecha,
        }),
      });

      setGastos((anterior) => [...anterior, gasto]);
    } catch (error) {
      console.error('Error al agregar gasto', error);
    }
  };

  useEffect(() => {
    cargarGastos();
  }, []);



  return (
    <GastoContext.Provider value={{gastos,agregarGastoPresupuesto, presupuesto,ingresar,cambiarPresupuestoValor,autenticado,gastado, mensaje,agregarGasto }}>
      {children}
    </GastoContext.Provider>
  );

 };
export function useGasto(){
    return useContext(GastoContext)
}