import React from 'react';
import Logo from './Logo';
import Mision from './Mision';
import Vision from './Vision';
import Justificacion from './Justificacion';

function MainContent() {
  return (
    <div className="container">
      <Logo />
      <div className="content">
        <Mision />
        <Vision />
        <Justificacion />
      </div>
    </div>
  );
}

export default MainContent;