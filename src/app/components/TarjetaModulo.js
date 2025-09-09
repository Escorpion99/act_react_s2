import React from 'react';
import styles from './TarjetaModulo.module.css';

const TarjetaModulo = ({ nombre, descripcion, categoria, variante }) => {
  let claseVariante = '';
  if (variante === 'primaria') {
    claseVariante = styles.tarjetaPrimaria;
  } else if (variante === 'secundaria') {
    claseVariante = styles.tarjetaSecundaria;
  } else if (variante === 'exito') {
    claseVariante = styles.tarjetaExito;
  }

  return (
    <div className={`${styles.tarjeta} ${claseVariante}`}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
};

export default TarjetaModulo;
