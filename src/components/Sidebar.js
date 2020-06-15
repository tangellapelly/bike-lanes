import React, { useState } from 'react';
import './Sidebar.scss';
import { colors, locations } from '../config';
import Logo from '../static/Logo';
import { Link } from 'react-router-dom';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Section = ({ title, children, className }) => {
   return (
      <div className="section">
         {title && <div className="section-title">{title}</div>}

         <div className={`section-content ${className ? className : ''}`}>
            {children}
         </div>
      </div>
   );
};

const CityTile = ({ city, selected }) => {
   return (
      <Link
         to={`/${city}`}
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
      </Link>
   );
};

const Sidebar = ({ city, sidebarOpen, setSidebarOpen }) => {
   const { label } = locations[city];
   return (
      <div className="sidebar">
         <div className="top">
            <div className="top-left">
               <Logo className="logo" />
               <div className="vertical-line" />
               <h1>Social distancing pop-up bike lanes in {label}</h1>
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
            style={{
               height: sidebarOpen ? 'auto' : '0px',
               overflow: 'hidden',
            }}
            className="rest"
         >
            <Section title="About">
               <p>
                  Municipal authorities across Europe encourage cycling as safe
                  means of transportation in the era of COVID-19 and a way to
                  reduce air pollution.
               </p>
               <p>
                  Many cities have opened new lanes promoting social distancing
                  while biking. In this map you c an explore the newly opened
                  bike lanes in {label}.
               </p>
               <p>
                  By using the slider you can compare the pre-COVID-19 with
                  post-COVID-19 state of the network. Zoom in for exact location
                  and to find the nearest social distancing bike lane.
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
                  Lanes existing before COVID-19
               </div>
               <div className="legend-row">
                  <div
                     className="line"
                     style={{
                        background: colors.covid,
                     }}
                  ></div>
                  Lanes introduced as a result of COVID-19
               </div>
            </Section>

            <Section title="Select a city" className="city-grid">
               {Object.keys(locations).map((currCity, index) => {
                  return (
                     <CityTile
                        key={index}
                        city={currCity}
                        selected={city === currCity}
                     />
                  );
               })}
            </Section>
            <Section>
               <div>Data provided: {locations[city].attribution}</div>
            </Section>
         </div>
      </div>
   );
};

export default Sidebar;
