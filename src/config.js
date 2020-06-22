import { normal, covid } from './style/global.scss';
import React from 'react';
import lyonImg from './static/lyon.png';
import parisImg from './static/paris.png';
import nantesImg from './static/nantes.png';
import berlinImg from './static/berlin.png';
import frankfurtImg from './static/frankfurt.png';
import hamburgImg from './static/hamburg.png';
import stuttgartImg from './static/stuttgart.png';

/**
 * TODO: Change api key to this:
 * ZPsPkW20penY5wYBXiQF5PYIZs22XVSNMiykcJ0cwRw
 *
 */

export const token = 'AHy7HHPkQFC5fcpQBmnQ7QA';
export const apikey = '1vO5Q3rOsOrwY8Ib0s_AEJn0-OyK0GvDBmAhyqNPHYc';
export const platform = new window.H.service.Platform({ apikey });

export const colors = {
   covid,
   normal,
};

export const locations = {
   paris: {
      coordinates: { lat: 48.864716, lng: 2.349014 },
      country: 'France',
      label: 'Paris',
      img: parisImg,
      attribution: (
         <a href="https://opendata.paris.fr/page/home/">Open Data Paris</a>
      ),
   },
   nantes: {
      coordinates: { lat: 47.218102, lng: -1.5528 },

      country: 'France',
      label: 'Nantes',
      img: nantesImg,
      attribution: <a href="https://data.grandlyon.com">data.grandlyon.com</a>,
   },
   lyon: {
      coordinates: { lat: 45.74846, lng: 4.84671 },
      country: 'France',
      label: 'Lyon',
      img: lyonImg,
      attribution: (
         <a href="https://data.nantesmetropole.fr/pages/home/">
            data.nantesmetropole.fr
         </a>
      ),
   },
   berlin: {
      coordinates: { lat: 52.520008, lng: 13.404954 },
      country: 'Allemagne',
      label: 'Berlin',
      img: berlinImg,
      attribution: (
         <a href="https://www.stadtentwicklung.berlin.de/geoinformation/">
            Geoportal Berlin
         </a>
      ),
   },
   frankfurt: {
      coordinates: { lat: 50.110924, lng: 8.682127 },
      country: 'Allemagne',
      label: 'Frankfurt',
      img: frankfurtImg,
      attribution: 'Geoportal Frankfurt',
   },
   stuttgart: {
      coordinates: { lat: 48.783333, lng: 9.183333 },
      country: 'Allemagne',
      label: 'Stuttgart',
      img: stuttgartImg,
      attribution: 'Geoportal Stuttgart',
   },
   hamburg: {
      coordinates: { lat: 53.551086, lng: 9.993682 },
      country: 'Allemagne',
      label: 'Hamburg',
      img: hamburgImg,
      attribution: 'Geoportal Hamburg',
   },
};

export const spaces = {
   normal: 'eQotPZjs',
   covid: 'rdkoDe4D',
};
