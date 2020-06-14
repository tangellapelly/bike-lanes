import React, { useState, useRef } from 'react';

//Style
import './style/app.scss';
import data from './data/data.json';
import Sidebar from './components/Sidebar';

//Components
import Map from './components/Map/Map';
import { ReactCompareSlider } from 'react-compare-slider';
import { locations } from './config';

function App() {
   const [city, setCity] = useState(Object.keys(locations)[0]);
   console.log(city);

   const [sliderPos, setSliderPos] = useState(0);
   console.log(sliderPos);
   const container = useRef(null);

   function calculateCursorPos(percent) {
      const { x, width } = container.current.getBoundingClientRect();
      return (percent / 100) * width;
   }
   return (
      <div className="app">
         <Sidebar setCity={setCity} city={city} />
         <div style={{ height: '100%', flex: 1 }} ref={container}>
            <ReactCompareSlider
               onPositionChange={(per) => setSliderPos(calculateCursorPos(per))}
               style={{ height: '100%' }}
               itemOne={
                  <Map
                     sliderPos={sliderPos}
                     city={city}
                     side="left"
                     data={data.filter((x) => !x.properties.covid)}
                  />
               }
               itemTwo={
                  <Map
                     sliderPos={sliderPos}
                     city={city}
                     data={data}
                     side="right"
                  />
               }
            />
         </div>
      </div>
   );
}

export default App;
