'use client'
import { useState } from 'react';
import { useGasto } from '@/app/Provider/ProviderGasto';

import React from 'react'

 

export default function Page() 
{
  const { ingresar, mensaje, autenticado } = useGasto();

  const [nombreUsuario, setNombreUsuario] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');

  const validar = async (e: React.FormEvent) => {
    e.preventDefault();
    await ingresar(nombreUsuario, contraseña);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', fontFamily: 'Arial' }}>
      <h2>Inicio de Sesión</h2>
      {autenticado ? (
        <p style={{ color: 'green' }}>¡Ya puede Ingresar!</p>
      ) : (
        <form onSubmit={validar}>
          <div>
            <label>Usuario:</label>
            <input
              type="text"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>
            Iniciar sesión
          </button>
        </form>
      )}
      {mensaje && <p style={{ marginTop: '20px' }}>{mensaje}</p>}
    </div>
  );
};

