import React from 'react';
import './Sidebar.scss';
import { colors } from '../config';
import parisImg from '../static/paris.png';

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

const CityTile = ({ city, onClick }) => {
   return (
      <div className="city-tile">
         <div
            onClick={onClick}
            className="tile"
            style={{
               backgroundImage: `url(${parisImg})`,
            }}
         />
         <div className="label">{city}</div>
      </div>
   );
};
const Sidebar = ({ setCity }) => {
   return (
      <div className="sidebar">
         <div className="top">
            <h1>New COVID-19 Bike Lanes</h1>
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
         </div>
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
            <CityTile city="Paris" onClick={() => setCity('paris')} />
            <CityTile city="Nantes" onClick={() => setCity('nantes')} />
            <CityTile city="Lyon" onClick={() => setCity('lyon')} />
         </Section>
      </div>
   );
};
export default Sidebar;
