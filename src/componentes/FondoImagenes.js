import React from 'react';
import '../cssComponentes/Informacion.css';

function FondoImagenes() {
  return (
    <div className="background-images">
      <img src={require('../ImagenesInformacion/LineaVerde.png')} alt="Linea Verde" className="linea-verde" />
      <img src={require('../ImagenesInformacion/LineaGris.png')} alt="Linea Gris" className="linea-gris" />
      <img src={require('../ImagenesInformacion/LineaVerde.png')} alt="Linea Verde" className="linea-esquina" />
    </div>
  );
}

export default FondoImagenes;