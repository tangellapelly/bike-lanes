import React from 'react';
import './Sidebar.scss';
import { colors, locations, languages, CURRENT_LANGUAGE } from '../config';
import Header from './Header';
import CityTile, { CityHeader } from './CityTile';

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

const Sidebar = ({ city, header }) => {
   return (
      <div className="sidebar">
         {header && <Header label={locations[city].labels[CURRENT_LANGUAGE]} />}

         <Section title={languages.aboutTitle[CURRENT_LANGUAGE]()}>
            {languages.aboutParagraphs[CURRENT_LANGUAGE]()}
         </Section>
         <Section title={languages.legendTitle[CURRENT_LANGUAGE]()}>
            <div className="legend-row">
               <div
                  className="line"
                  style={{
                     background: colors.normal,
                  }}
               ></div>
               {languages.legendLabelNormal[CURRENT_LANGUAGE]()}
            </div>
            <div className="legend-row">
               <div
                  className="line"
                  style={{
                     background: colors.covid,
                  }}
               ></div>
               {languages.legendLabelCovid[CURRENT_LANGUAGE]()}
            </div>
         </Section>

         <div className="city-grid">
            <CityHeader />
            {Object.keys(locations)
               .sort(
                  (a, b) =>
                     locations[b].measurements.covid -
                     locations[a].measurements.covid
               )
               .map((currCity, index) => {
                  return (
                     <CityTile
                        key={index}
                        city={currCity}
                        selected={city === currCity}
                     />
                  );
               })}
         </div>
         <Section className="attribution">
            <div>
               {languages.dataAttributionLabel[CURRENT_LANGUAGE]()}{' '}
               {locations[city].attribution}
            </div>
            <div>{languages.finePrintLabel[CURRENT_LANGUAGE]()}</div>
         </Section>
      </div>
   );
};

export default Sidebar;
