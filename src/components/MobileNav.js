import React from 'react';
import './MobileNav.scss';

import {
   Map as MapIcon,
   FormatListBulleted as FormatListBulletedIcon,
} from '@material-ui/icons';
const MobileNav = ({ selectedTab, setSelectedTab }) => {
   return (
      <div className="mobile-nav">
         <div
            className={`tab ${selectedTab === 0 ? `tab-selected` : ``}`}
            onClick={() => setSelectedTab(0)}
         >
            <MapIcon className="icon" />
            Carte
         </div>
         <div
            className={`tab ${selectedTab === 1 ? `tab-selected` : ``}`}
            onClick={() => setSelectedTab(1)}
         >
            <FormatListBulletedIcon className="icon" />
            Info
         </div>
      </div>
   );
};

export default MobileNav;
