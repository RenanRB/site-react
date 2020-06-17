import React from 'react';
import './App.css';
import Header from './components/Header';
import Localizacao from './components/Localizacao';
import Listagem from './components/Listagem';
import Detalhe from './components/Detalhe';

function App() {
  return (
    <div className="App">
      <Header />
        <Localizacao />
        {/* <Listagem /> */}
        <Detalhe />
    </div>
  );
}

export default App;
