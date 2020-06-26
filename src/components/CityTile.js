import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, locations, maxMeasurement } from '../config';
import formatPopulation from '../util/formatPopulation';
import './CityTile.scss';

const barLength = 90;
const CityTile = ({ city, selected }) => {
   return (
      <Link
         to={`/${city}`}
         className={`city-tile ${selected ? 'tile-selected' : ''}`}
      >
         <div className="radio-col">
            <input type="radio" checked={selected} />
         </div>
         <div className="lead flag-cell">
            <img
               src={`https://restcountries.eu/data/${locations[city].countryCode}.svg`}
            />
            <div>{locations[city].label}</div>
         </div>
         <div className="lead">
            {formatPopulation(locations[city].population)}
         </div>
         <div className="lead covid-measurement-lead">
            {Math.round(locations[city].measurements.covid * 10) / 10} KM
         </div>
      </Link>
   );
};

export const CityHeader = () => {
   return (
      <div className="city-header">
         <div></div>
         <div className="sublead">ville</div>
         <div className="sublead">Population</div>
         <div className="sublead">coronapistes</div>
      </div>
   );
};

export default CityTile;
