import { normal, covid } from './style/global.scss';
import React from 'react';
import lyonImg from './static/lyon.png';
import parisImg from './static/paris.png';
import nantesImg from './static/nantes.png';

/**
 * TODO: Change api key to this:
 * ZPsPkW20penY5wYBXiQF5PYIZs22XVSNMiykcJ0cwRw
 *
 */

const apikey = '1vO5Q3rOsOrwY8Ib0s_AEJn0-OyK0GvDBmAhyqNPHYc';
const { H } = window;
const platform = new H.service.Platform({ apikey });

const colors = {
   covid,
   normal,
};

const locations = {
   paris: {
      coordinates: { lat: 48.864716, lng: 2.349014 },
      zoom: 13,
      province: 'Île-de-France',
      label: 'Paris',
      img: parisImg,
      attribution: (
         <a href="https://opendata.paris.fr/page/home/">Open Data Paris</a>
      ),
   },
   nantes: {
      coordinates: { lat: 47.218102, lng: -1.5528 },
      zoom: 13,
      province: 'Pays de la Loire',
      label: 'Nantes',
      img: nantesImg,
      attribution: <a href="https://data.grandlyon.com">data.grandlyon.com</a>,
   },
   lyon: {
      coordinates: { lat: 45.74846, lng: 4.84671 },
      zoom: 13,
      province: 'Auvergne-Rhône-Alpes',
      label: 'Lyon',
      img: lyonImg,
      attribution: (
         <a href="https://data.nantesmetropole.com">data.nantesmetropole.com</a>
      ),
   },
};

export { platform, colors, locations };
