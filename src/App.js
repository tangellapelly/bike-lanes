import React, { useState } from 'react';
//Style
import './style/app.scss';
import lyonData from './data/lyon.json';
import nantesData from './data/nantes.json';
import parisData from './data/paris.json';

//Components
import Map from './components/Map/Map';

const data = {
   lyon: lyonData,
   nantes: nantesData,
   paris: parisData,
};

function App() {
   return (
      <div className="app">
         <Map data={data} />
      </div>
   );
}

export default App;
