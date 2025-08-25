import React from 'react';
import Tarjeta from './components/TarjetaGlobal';

function App() {
  return (
    <div className="App">
      <Tarjeta
        titulo="Card 1"
        contenido="Yo solo se que nada se..."
        color="#e0f7fa"
      />
      <Tarjeta
        titulo="Card 2"
        contenido="Entre mas se trabaja mas..."
        color="#fff3e0"
      />
    </div>
  );
}

export default App;