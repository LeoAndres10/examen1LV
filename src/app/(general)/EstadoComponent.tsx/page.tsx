'use client'
import React from 'react'
import {useGasto} from '@/app/Provider/ProviderGasto';
export default function Page() {

  const { presupuesto, gastado } = useGasto();

  if (presupuesto === 0) return null;

  const porcentaje = (gastado / presupuesto) * 100;

  let message = `Has gastado $${gastado} de $${presupuesto}`;
  let color = 'green';

  if (porcentaje >= 100) {
    message = '🚨 Has superado el límite del presupuesto, debes ajustar gastos';
    color = 'red';
  } else if (porcentaje >= 80) {
    color = 'orange';
  }

  return (
    <div style={{ marginTop: '20px', padding: '10px', backgroundColor: color, color: 'white' }}>
      {message}
    </div>
  );
};



