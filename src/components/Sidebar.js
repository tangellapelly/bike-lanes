import React, { useState } from 'react';
import './Sidebar.scss';
import { colors, locations } from '../config';
import parisImg from '../static/paris.png';
import Logo from '../static/Logo';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Section = ({ title, children, className }) => {
   return (
      <div className="section">
         <div className="section-title">{title}</div>
         <div className={`section-content ${className ? className : ''}`}>
            {children}
         </div>
      </div>
   );
};

const CityTile = ({ city, onClick, selected }) => {
   console.log(city);
   return (
      <div
         onClick={onClick}
         className={`city-tile ${selected ? 'tile-selected' : ''}`}
      >
         <div
            className={`tile `}
            style={{
               backgroundImage: `url(${locations[city].img})`,
            }}
         />
         <div className="label">
            <div className="label-city">{locations[city].label}</div>
            <div className="label-province">{locations[city].province}</div>
         </div>
      </div>
   );
};

const Sidebar = ({ setCity, city, sidebarOpen, setSidebarOpen }) => {
   return (
      <div className="sidebar">
         <div className="top">
            <div className="top-left">
               <Logo className="logo" />
               <div className="vertical-line" />
               <h1>New COVID-19 Bike Lanes</h1>
            </div>
            <KeyboardArrowDownIcon
               className="expand-icon"
               style={{
                  transform: `rotate(${!sidebarOpen ? '180deg' : '0deg'})`,
               }}
               onClick={() => setSidebarOpen((e) => !e)}
            />
         </div>
         <div
            class="rest"
            style={{
               height: sidebarOpen ? 'auto' : 0,
               overflow: 'none',
            }}
         >
            <Section title="About">
               <p>
                  This map explores the new bike lanes that have appeared
                  throughout French cities as a result of COVID-19.
               </p>
               <p>
                  Multiple cities have been giving back streets to the people
                  for more open air space.
               </p>
               <p>
                  Move the slider across the page horizontally to compare the
                  change in bike lanes.
               </p>
            </Section>
            <Section title="Legend">
               <div className="legend-row">
                  <div
                     className="line"
                     style={{
                        background: colors.normal,
                     }}
                  ></div>
                  Lanes pre COVID-19
               </div>
               <div className="legend-row">
                  <div
                     className="line"
                     style={{
                        background: colors.covid,
                     }}
                  ></div>
                  Lanes for COVID-19
               </div>
            </Section>

            <Section title="Select a city" className="city-grid">
               {Object.keys(locations).map((currCity, index) => {
                  return (
                     <CityTile
                        city={currCity}
                        selected={city === currCity}
                        onClick={() => setCity(currCity)}
                     />
                  );
               })}
            </Section>
         </div>
      </div>
   );
};

export default Sidebar;
