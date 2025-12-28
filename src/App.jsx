import React from 'react';
// 1. IMPORTAMOS EL HOOK PARA PODER LEER EL COLOR
import { useTheme } from './Context/ThemeContext'; 

import Navbar from './Components/Common/Navbar';
import Hero from './Components/Home/Hero';
import OutfitGrid from './Components/Home/OutfitGrid';
import Bio from './Components/Home/Bio';
import Footer from './Components/Common/Footer';

function App() {
  // 2. OBTENEMOS EL TEMA ACTUAL
  const { theme } = useTheme();

  return (
    // 3. APLICAMOS EL COLOR DIRECTAMENTE AL CONTENEDOR PRINCIPAL
    <div style={{
        backgroundColor: theme.background, // <--- AQUÍ ESTÁ EL TRUCO
        color: theme.text,                 // También el texto base
        minHeight: '100vh',                // Obliga a que ocupe toda la altura siempre
        transition: 'background-color 0.5s ease, color 0.5s ease',
        width: '100%'
    }}>
      <Navbar />
      
      <div id="inicio">
        <Hero />
      </div>
      
      <div id="lookbook">
        <OutfitGrid />
      </div>
      
      <div id="acerca">
        <Bio />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;