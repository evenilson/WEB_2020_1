import React from 'react';
import './App.css';
import Arena from './components/questao1e2/Arena'
import World from './components/questao3/World'
import Arena4 from './components/questao4/Arena'
import Hero from './components/questao4/Hero'
import Enemy from './components/questao4/Enemy'

import { URL_HERO, URL_ENEMY } from './constants'

function App() {
  return (
    <div className="App">

      <h4>questao1e2</h4>
      <Arena/>


      <h4 className="PaddingButton">questao3</h4>
      <World>
        <Arena/>
        <Arena/>
        <Arena/>
      </World>


      <h4 className="PaddingButton">questao4</h4>
      <div className="row-md-12">
        <Arena4 arena="Arena Castelão">
          <Hero name = "Baku" img={URL_HERO}/>
          <Enemy name = "Yujiro" img={URL_ENEMY}/>
        </Arena4>
      </div>

    </div>
  );
}

export default App;
