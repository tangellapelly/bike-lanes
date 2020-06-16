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
               <h1>Nouvelle pistes cyclables post COVID en {label}</h1>
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
            <Section title="A propos">
               <p>
                  De nombreuses autorités locales à travers l’Europe encouragent
                  les déplacements à vélo afin de réduire les risques sanitaires
                  liés à la pandémie ainsi que la pollution.
               </p>
               <p>
                  Dans ce contexte, plusieurs villes françaises et européennes
                  ont créé de nouvelles pistes cyclables. Sélectionnez une ville
                  dans la liste ci-dessous pour consulter sa carte.
               </p>
               <p>
                  Pour visualiser les évolutions, balayez l’écran avec le
                  curseur, de gauche à droite sur la carte.
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

            <Section title="Sélectionnez une ville" className="city-grid">
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
               <div>Données fournies par {locations[city].attribution}</div>
            </Section>
         </div>
      </div>
   );
};

export default Sidebar;
