import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { colors, locations, maxMeasurement } from '../config';
import './CityTile.scss';

const barLength = 90;
const CityTile = ({ city, selected }) => {
   return (
      <Link
         to={`/${city}`}
         className={`city-tile ${selected ? 'tile-selected' : ''}`}
      >
         <div className="city-tile-left">
            <input type="radio" checked={selected} />
            <div>
               <div className="country">
                  <img
                     src={`https://restcountries.eu/data/${
                        locations[city].country === 'France' ? 'fra' : 'deu'
                     }.svg`}
                  />
                  {locations[city].country}
               </div>

               <div className="city">{locations[city].label}</div>
            </div>
         </div>
         <div className="city-tile-right">
            <div className="bar-row">
               <div
                  className="bar"
                  style={{
                     width:
                        (locations[city].measurements.normal / maxMeasurement) *
                           barLength +
                        'px',
                     background: colors.normal,
                  }}
               />

               <div className="label">
                  {Math.round(locations[city].measurements.normal * 10) / 10} KM
               </div>
            </div>
            <div className="bar-row">
               <div
                  className="bar"
                  style={{
                     width:
                        (locations[city].measurements.covid / maxMeasurement) *
                           barLength +
                        'px',
                     background: colors.covid,
                  }}
               />

               <div className="label">
                  {Math.round(locations[city].measurements.covid * 10) / 10} KM
               </div>
            </div>
         </div>
      </Link>
   );
};

export default CityTile;
