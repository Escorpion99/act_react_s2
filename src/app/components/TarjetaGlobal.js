import React from 'react';
import '../globals.css';

const TarjetaGlobal = ({ titulo, contenido, color }) => {
  return (
    <div className="tarjeta-global" style={{ borderColor: color }}>
      <h2 className="titulo-global" style={{ color: color }}>
        {titulo}
      </h2>
      <p className="contenido-global">{contenido}</p>
    </div>
  );
};

export default TarjetaGlobal;