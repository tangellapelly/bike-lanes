import React from 'react';

import { languages, CURRENT_LANGUAGE } from '../config';
const Descriptor = ({ side, sliderPos }) => {
   return (
      <div
         style={{ left: side === 'left' ? 0 : sliderPos }}
         className="descriptor"
      >
         {side === 'left'
            ? languages.mapDescriptorNormalLabel[CURRENT_LANGUAGE]()
            : languages.mapDescriptorCovidLabel[CURRENT_LANGUAGE]()}
      </div>
   );
};

export default Descriptor;
