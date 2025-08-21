import Image from "next/image";
import Link from "next/link";
 import {  useGasto } from '@/app/Provider/ProviderGasto';
import ProviderGasto from "@/app/Provider/ProviderGasto";
import Layout from './(general)/layout'
import { Plantilla } from "./Modelos/Plantilla";
import PageA from "./(general)/Autenticacion/page";
import NavBarComponent from "./Componentes/NavbarComponent";

export default function Home({children}:Plantilla) {


const SistemaLogin = () => {
  const { autenticado } = useGasto();

  if (!autenticado) {
    return <PageA />;
  }

  return (
  
    <div>
      
      <h1 style={{ fontFamily: 'Arial' }}>Sistema de Presupuesto de Gastos Personales</h1>
     <ProviderGasto>
      <SistemaLogin>
        
      </SistemaLogin>
      <Layout >
      </Layout>
     </ProviderGasto>
    
   </div>

  );
};
}




  

