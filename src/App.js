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
   const [sidebarOpen, setSidebarOpen] = useState(true);

   const [sliderPos, setSliderPos] = useState(0);
   const container = useRef(null);

   function calculateCursorPos(percent) {
      const { width } = container.current.getBoundingClientRect();
      return (percent / 100) * width + 3;
   }
   return (
      <div className="app">
         <Sidebar
            setCity={setCity}
            city={city}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
         />
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
                     sidebarOpen={sidebarOpen}
                  />
               }
               itemTwo={
                  <Map
                     sliderPos={sliderPos}
                     city={city}
                     data={data}
                     side="right"
                     sidebarOpen={sidebarOpen}
                  />
               }
            />
         </div>
      </div>
   );
}

export default App;
