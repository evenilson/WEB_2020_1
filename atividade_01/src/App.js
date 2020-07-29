import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import NomeCursoCity from './components/questao1/NomeCursoCity'
import NomeCursoCityClass from './components/questao2/NomeCursoCityClass'
import NomeCursoCityFilho from './components/questao3/NomeCursoCityFilho'
import NomeCursoCityPai from './components/questao3/NomeCursoCityPai'
import NomeCursoCityClassFilho from './components/questao4e5/NomeCursoCityClassFilho'
import NomeCursoCityClassPai from './components/questao4e5/NomeCursoCityClassPai'


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

        <div className=" PaddingButton ">
          <div className="card" Style="margin: 0 250px 0 250px;">
            <div className="card-header">
              questao4e5
            </div>
            <div className="card-body">
              <NomeCursoCityClassFilho>
                <NomeCursoCityClassPai nome = 'Liandro' curso = 'SI' city = 'Caninde'/>
              </NomeCursoCityClassFilho>
            </div>


          </div>
        </div>
        
        

    </div>
  );
}

export default App;