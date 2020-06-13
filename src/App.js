import React, { useState } from 'react';
//Style
import './style/app.scss';
import data from './data/data.json';
import Sidebar from './components/Sidebar';

//Components
import Map from './components/Map/Map';

import {
   ReactCompareSlider,
   ReactCompareSliderImage,
} from 'react-compare-slider';

import { locations } from './config';
function App() {
   const [city, setCity] = useState(Object.keys(locations)[0]);
   console.log(city);

   const dataToUse = data;
   return (
      <div className="app">
         <Sidebar setCity={setCity} />

         <ReactCompareSlider
            style={{ height: '100%', flex: 1 }}
            itemOne={
               <Map
                  city={city}
                  data={dataToUse.filter((x) => !x.properties.covid)}
               />
            }
            itemTwo={<Map city={city} data={dataToUse} />}
         />
      </div>
   );
}

export default App;
