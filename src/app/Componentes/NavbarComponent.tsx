'use client'
import Link from 'next/link'
import React from 'react'
import { useGasto } from '@/app/Provider/ProviderGasto'

export default function NavBarComponent() {

    const {gastado}=useGasto()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                 
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/Autenticacion">login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/FormularioComponent"> Formulario</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link" href="/EstadoComponent">Estado</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/ListaGastos">Lista Gastos</Link>
                            </li>
                           
                         
                         
                        </ul>
                       
                </div>
            </nav>
        </>
    )
}
