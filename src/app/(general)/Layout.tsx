import Image from "next/image";
import Link from "next/link";
 import {  useGasto } from '@/app/Provider/ProviderGasto';
import ProviderGasto from "@/app/Provider/ProviderGasto";
import PageF from "./FormularioComponent.tsx/page";
import PageE from "./EstadoComponent.tsx/page";
import PageA from "./Autenticacion/page";
import NavBarComponent from "../Componentes/NavbarComponent";
import { Plantilla } from "../Modelos/Plantilla";
export default function Layout() {




  return (
    <div>
    <ProviderGasto>
    <NavBarComponent></NavBarComponent>
      <h1 style={{ fontFamily: 'Arial' }}>Sistema de Presupuesto de Gastos Personales</h1>
       
     
   
      <PageA />
      <PageF></PageF>
      <PageE />
    </ProviderGasto>
    </div>
  );
};


