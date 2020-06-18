import React from 'react';
const Descriptor = ({ side, sliderPos }) => {
   return (
      <div
         style={{ left: side === 'left' ? 0 : sliderPos }}
         className="descriptor"
      >
         {side === 'left'
            ? 'Pistes existantes avant COVID-19'
            : 'Pistes créées en raison de COVID-19'}
      </div>
   );
};

export default Descriptor;
