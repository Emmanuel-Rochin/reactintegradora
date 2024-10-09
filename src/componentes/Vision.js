import React from 'react';

function Vision() {
  return (
    <div className="section vision">
      <div className="video-container vision-video">
        <video src={require('../videoInformacion/VideoInformacion2.mp4')} autoPlay muted loop></video>
      </div>
      <div className="text-container vision-text">
        <h2>Visión</h2>
        <p>Aportar a la formación de la comunidad, dejando a un lado las dificultades, brindando comodidad y confianza a los usuarios, para en un futuro llegar a extenderse a toda la república, buscando la cooperación mutua.</p>
      </div>
    </div>
  );
}

export default Vision;