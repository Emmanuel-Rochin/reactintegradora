import React from 'react';
import FondoImagenes from './componentes/FondoImagenes';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import './cssComponentes/Informacion.css';

function App() {
  return (
    <div>
      <FondoImagenes />
      <Header />
      <MainContent />
    </div>
  );
}

export default App;