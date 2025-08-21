import React from 'react'
import { useGasto } from '@/app/Provider/ProviderGasto';
export default function Page() {
  

  const { gastos } = useGasto();

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>Gastos que se han registrado</h3>
      {gastos.length === 0 ? (
        <p>Aun no hay gastos.</p>
      ) : (
        <ul>
          {gastos.map((gasto, i) => (
            <li key={i} style={{ marginBottom: '10px' }}>
              <strong>{gasto.categoria}</strong> - ${gasto.monto} - {gasto.descripcion} - {gasto.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};



