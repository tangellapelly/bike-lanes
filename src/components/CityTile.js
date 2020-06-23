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
         <div>
            <div className="sublead">
               <img
                  src={`https://restcountries.eu/data/${
                     locations[city].country === 'France' ? 'fra' : 'deu'
                  }.svg`}
               />
               {locations[city].country}
            </div>

            <div className="lead">{locations[city].label}</div>
         </div>
         <div>
            <div className="sublead">Population</div>
            <div className="lead">
               {formatPopulation(locations[city].population)}
            </div>
         </div>
         <div>
            <div className="sublead">distance popup</div>
            <div className="lead">
               {Math.round(locations[city].measurements.covid * 10) / 10} KM
            </div>
         </div>
      </Link>
   );
};

export default CityTile;
