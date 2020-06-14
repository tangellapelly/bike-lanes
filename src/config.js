import { normal, covid } from './style/global.scss';

import lyonImg from './static/lyon.png';
import parisImg from './static/paris.png';
import nantesImg from './static/nantes.png';

const apikey = '1vO5Q3rOsOrwY8Ib0s_AEJn0-OyK0GvDBmAhyqNPHYc'; //Christo's: 'ZPsPkW20penY5wYBXiQF5PYIZs22XVSNMiykcJ0cwRw';
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
   },
   nantes: {
      coordinates: { lat: 47.218102, lng: -1.5528 },
      zoom: 13,
      province: 'Pays de la Loire',
      label: 'Nantes',
      img: nantesImg,
   },
   lyon: {
      coordinates: { lat: 45.74846, lng: 4.84671 },
      zoom: 13,
      province: 'Auvergne-Rhône-Alpes',
      label: 'Lyon',
      img: lyonImg,
   },
};

export { platform, colors, locations };
