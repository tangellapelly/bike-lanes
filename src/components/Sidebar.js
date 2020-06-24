import React, { useState } from 'react';
import './Sidebar.scss';
import { colors, locations } from '../config';
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
         {header && <Header label={locations[city].label} />}

         <Section title="A propos">
            <p>
               De nombreuses autorités locales à travers l’Europe encouragent
               les déplacements à vélo afin de réduire les risques sanitaires
               liés à la pandémie ainsi que la pollution.
            </p>
            <p>
               Dans ce contexte, plusieurs villes françaises et européennes ont
               créé de nouvelles pistes cyclables. Sélectionnez une ville dans
               la liste ci-dessous pour consulter sa carte.
            </p>
            <p>
               Pour visualiser les évolutions, balayez l’écran avec le curseur,
               de gauche à droite sur la carte.
            </p>
         </Section>
         <Section title="Légende">
            <div className="legend-row">
               <div
                  className="line"
                  style={{
                     background: colors.normal,
                  }}
               ></div>
               Pistes existantes avant COVID-19
            </div>
            <div className="legend-row">
               <div
                  className="line"
                  style={{
                     background: colors.covid,
                  }}
               ></div>
               Pistes créées en raison de COVID-19
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
            <div>Données fournies par {locations[city].attribution}</div>
            <div>
               La distance couverte par les voies cyclables listée sur ce site
               peut ne pas correspondre exactement aux spécifications de
               certaines villes
            </div>
         </Section>
      </div>
   );
};

export default Sidebar;
