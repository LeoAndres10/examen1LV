'use client'
import { useState } from 'react';
import { useGasto } from '@/app/Provider/ProviderGasto';

export default function Page() {
  const { cambiarPresupuestoValor, agregarGasto } = useGasto();

  const [presupuestoIngresar, setPresupuestoIngresar] = useState('');
  const [gastoIngresar, setGastoIngresar] = useState<number>(0);

  const cambiarPresupuesto = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(presupuestoIngresar);
    if (!isNaN(value) && value > 0) {
      cambiarPresupuestoValor(value);
      setPresupuestoIngresar('');
    }
  };

  const cambiarAgregarGasto = (e: React.FormEvent) => {
    e.preventDefault();
    const value = gastoIngresar;
    if (!isNaN(value) && value > 0) {
      agregarGasto(value);
      setGastoIngresar(0);
    }
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Presupuesto Mensual</h3>
      <form onSubmit={cambiarPresupuesto}>
        <input
          type="number"
          value={presupuestoIngresar}
          onChange={(e) => setPresupuestoIngresar(e.target.value)}
          placeholder="Establecer un presupuesto"
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Guardar presupuesto</button>
      </form>

      <form onSubmit={cambiarAgregarGasto} style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={gastoIngresar}
          onChange={(e) => setGastoIngresar(gastoIngresar)}
          placeholder="Agregar gasto"
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Agregar gasto</button>
      </form>
    </div>
  );
};

