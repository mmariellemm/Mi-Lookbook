import React from 'react';
import OutfitGrid from './Components/Home/OutfitGrid'; // Ajusta mayúsculas
import Navbar from './Components/Common/Navbar';       // Ajusta mayúsculas

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Un espacio extra arriba para que no se pegue todo */}
      <div style={{ height: '50px' }}></div>
      
      <OutfitGrid />
    </div>
  );
}

export default App;