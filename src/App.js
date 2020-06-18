//React
import React, { useState, useRef, useEffect } from 'react';

//Style
import './style/app.scss';
import { mobileWidth } from './style/global.scss';
// import rawData from './data/data.json';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Header from './components/Header';

//Components
import Map from './components/Map';
import { ReactCompareSlider } from 'react-compare-slider';
import { locations, platform, spaces } from './config';

const { H } = window;
// const data = rawData.features;

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
      'Nouvelles pistes cyclables post COVID à  ' +
      locations[city].label +
      ' - HERE Developer';

   // console.log(mobile, selectedTab);

   const slider = (
      <ReactCompareSlider
         onPositionChange={(per) => setSliderPos(calculateCursorPos(per))}
         style={{ height: '100%' }}
         itemOne={
            <Map
               sliderPos={sliderPos}
               city={city}
               side="left"
               mobile={mobile}
            />
         }
         itemTwo={
            <Map
               sliderPos={sliderPos}
               city={city}
               side="right"
               mobile={mobile}
            />
         }
      />
   );
   if (mobile) {
      return (
         <div className="app">
            <Header label={locations[city].label} />
            <div
               className="slider-container"
               ref={container}
               style={{ display: selectedTab === 0 ? 'block' : 'none' }}
            >
               {slider}
            </div>
            <div
               style={{
                  height: '100%',
                  display: selectedTab === 1 ? '' : 'none',
               }}
            >
               <Sidebar header={false} city={city} />
            </div>

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
               {slider}
            </div>
         </div>
      );
   }
}

export default App;
