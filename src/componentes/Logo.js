import React from 'react';

function Logo() {
  return (
    <div className="logo">
      <img src={require('../ImagenesInformacion/Logo.png')} alt="Logo" />
      <h1 className="main-title">Witty</h1>
    </div>
  );
}

export default Logo;