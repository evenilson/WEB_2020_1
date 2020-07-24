import React from 'react';
import './App.css';

import NomeCursoCity from './components/questao1/NomeCursoCity'
import NomeCursoCityClass from './components/questao2/NomeCursoCityClass'
import NomeCursoCityFilho from './components/questao3/NomeCursoCityFilho'
import NomeCursoCityPai from './components/questao3/NomeCursoCityPai'

function App() {
  return (
    <div className="App">
        <h3>questao1</h3>
        <NomeCursoCity/>

        <h3 className="PaddingButton">questao2</h3>
        <NomeCursoCityClass/>

        <h3 className="PaddingButton" >questao3</h3>
        <NomeCursoCityFilho>
          <NomeCursoCityPai nome = 'Evenilson' curso = 'SI' city = 'Canindr'/>
        </NomeCursoCityFilho>

    </div>
  );
}

export default App;