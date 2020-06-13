import React from 'react';
import './Tooltip.scss';
import { colors } from '../config';
const Tooltip = ({ x, y, content }) => {
   return (
      <div
         style={{
            left: x + 10,
            top: y + 10,
         }}
         className="tooltip"
      >
         <div className="tooltip-top">
            <div
               className="line"
               style={{
                  background: content.covid ? colors.covid : colors.normal,
               }}
            ></div>
            <div className="tooltip-title">
               {content.covid ? 'Covid Lane' : 'Normal Lane'}
            </div>
         </div>

         <div className="tooltip-address">{content.name}</div>
      </div>
   );
};

export default Tooltip;
