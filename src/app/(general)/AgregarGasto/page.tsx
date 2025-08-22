'use client'
import { useState } from 'react';
import { useGasto } from '@/app/Provider/ProviderGasto';


export default function GastosComponent(){
  const { agregarGastoPresupuesto, agregarGasto} = useGasto();
  

  const [monto, setMonto] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');

   async function validar (e: React.FormEvent){
    e.preventDefault();

    const gasto = {
      monto:(monto),
      categoria,
      descripcion,
      fecha,
    };

    await agregarGastoPresupuesto(gasto);
    agregarGasto(gasto.monto);

    setMonto(0);
    setCategoria('');
    setDescripcion('');
    setFecha('');
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Registrar Gasto</h3>
      <form onSubmit={validar}>
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(monto)}
          required
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Agregar Gasto</button>
      </form>
    </div>
  );
};