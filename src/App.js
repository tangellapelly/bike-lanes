//React
import React, { useState, useRef, useEffect } from 'react';

//Style
import './style/app.scss';
import { mobileWidth } from './style/global.scss';
import data from './data/data.json';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';

//Components
import Map from './components/Map';
import { ReactCompareSlider } from 'react-compare-slider';
import { locations } from './config';

function App(props) {
   const { city = 'paris' } = props.match.params;
   const [sliderPos, setSliderPos] = useState(0);

   const [selectedTab, setSelectedTab] = useState(0);
   const container = useRef(null);

   const [mobile, setMobile] = useState(false);

   useEffect(() => {
      window.addEventListener('resize', handleViewChange);
      handleViewChange();
   }, []);

   function handleViewChange() {
      console.log(window.innerWidth, parseInt(mobileWidth));
      window.innerWidth < parseInt(mobileWidth)
         ? setMobile(true)
         : setMobile(false);
   }

   function calculateCursorPos(percent) {
      const { width } = container.current.getBoundingClientRect();
      return (percent / 100) * width + 3;
   }

   document.title =
      ' Nouvelle pistes cyclables post COVID en ' +
      locations[city].label +
      ' - HERE Developer';

   // console.log(mobile, selectedTab);
   if (mobile) {
      return (
         <div className="app">
            <Header label={locations[city].label} />
            {selectedTab === 0 ? (
               <div className="slider-container" ref={container}>
                  <ReactCompareSlider
                     onPositionChange={(per) =>
                        setSliderPos(calculateCursorPos(per))
                     }
                     style={{ height: '100%' }}
                     itemOne={
                        <Map
                           sliderPos={sliderPos}
                           city={city}
                           side="left"
                           mobile={mobile}
                           data={data.filter((x) => !x.properties.covid)}
                        />
                     }
                     itemTwo={
                        <Map
                           sliderPos={sliderPos}
                           city={city}
                           data={data}
                           side="right"
                           mobile={mobile}
                        />
                     }
                  />
               </div>
            ) : (
               <Sidebar header={false} city={city} />
            )}
            <MobileNav
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
         </div>
      );
   } else {
      return (
         <div className="app">
            <Sidebar header={true} city={city} />
            <div className="slider-container" ref={container}>
               <ReactCompareSlider
                  onPositionChange={(per) =>
                     setSliderPos(calculateCursorPos(per))
                  }
                  style={{ height: '100%' }}
                  itemOne={
                     <Map
                        sliderPos={sliderPos}
                        city={city}
                        side="left"
                        data={data.filter((x) => !x.properties.covid)}
                        mobile={mobile}
                     />
                  }
                  itemTwo={
                     <Map
                        sliderPos={sliderPos}
                        city={city}
                        data={data}
                        side="right"
                        mobile={mobile}
                     />
                  }
               />
            </div>
         </div>
      );
   }
}

export default App;
