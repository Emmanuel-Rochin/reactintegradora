import React from 'react';

function Mision() {
  return (
    <div className="section mision">
      <div className="video-container mision-video">
        <video src={require('../videoInformacion/VideoInformacion1.mp4')} autoPlay muted loop></video>
      </div>
      <div className="text-container mision-text">
        <h2>Misión</h2>
        <p>Proporcionar un enlace para que el alumnado pueda recibir asesorías de una forma más eficaz con la disminución del tiempo de espera de las mismas.</p>
      </div>
    </div>
  );
}

export default Mision;