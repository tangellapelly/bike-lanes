//React
import React, { useState, useRef } from 'react';

//Style
import './style/app.scss';
import data from './data/data.json';
import Sidebar from './components/Sidebar';

//Components
import Map from './components/Map/Map';
import { ReactCompareSlider } from 'react-compare-slider';
import { locations } from './config';

function App(props) {
   const { city = 'paris' } = props.match.params;
   const [sidebarOpen, setSidebarOpen] = useState(true);
   const [sliderPos, setSliderPos] = useState(0);
   const container = useRef(null);

   function calculateCursorPos(percent) {
      const { width } = container.current.getBoundingClientRect();
      return (percent / 100) * width + 3;
   }

   document.title =
      ' Nouvelle pistes cyclables post COVID en ' +
      locations[city].label +
      ' - HERE Developer';

   return (
      <div className="app">
         <Sidebar
            city={city}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
         />
         <div className="slider-container" ref={container}>
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
