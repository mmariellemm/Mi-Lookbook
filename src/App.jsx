import React from 'react';
import Navbar from './Components/Common/Navbar';
import Hero from './Components/Home/Hero';
import OutfitGrid from './Components/Home/OutfitGrid';
import Bio from './Components/Home/Bio';       // <--- Nuevo
import Footer from './Components/Common/Footer'; // <--- Nuevo

function App() {
  return (
    <div>
      <Navbar />
      
      <Hero />
      
      {/* Agregamos el ID aquí para que el botón del Hero sepa a dónde bajar */}
      <div id="lookbook">
        <OutfitGrid />
      </div>
      
      <Bio />
      
      <Footer />
    </div>
  );
}

export default App;