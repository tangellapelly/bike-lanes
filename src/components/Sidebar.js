import React from 'react';
import './Sidebar.scss';
import { colors, locations } from '../config';
import parisImg from '../static/paris.png';
import Logo from '../static/Logo';

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
               backgroundImage: `url(${parisImg})`,
            }}
         />
         <div className="label">
            <div className="label-city">{locations[city].label}</div>
            <div className="label-province">{locations[city].province}</div>
         </div>
      </div>
   );
};

const Sidebar = ({ setCity, city }) => {
   return (
      <div className="sidebar">
         <div className="top">
            <Logo style={{ height: 35, width: 35 }} />
            <div className="vertical-line" />
            <h1>New COVID-19 Bike Lanes</h1>
         </div>
         <Section title="About">
            <p>
               This map explores the new bike lanes that have appeared
               throughout French cities as a result of COVID-19.
            </p>
            <p>
               Multiple cities have been giving back streets to the people for
               more open air space.
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
            <CityTile
               city="paris"
               selected={city === 'paris'}
               onClick={() => setCity('paris')}
            />
            <CityTile
               city="nantes"
               selected={city === 'nantes'}
               onClick={() => setCity('nantes')}
            />
            <CityTile
               city="lyon"
               selected={city === 'lyon'}
               onClick={() => setCity('lyon')}
            />
         </Section>
      </div>
   );
};

export default Sidebar;
