import { normal, covid } from './style/global.scss';
import React from 'react';
import measurements from './data/measurements.json';

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
      attribution: (
         <a href="https://opendata.paris.fr/page/home/">Open Data Paris</a>
      ),
      measurements: measurements.paris,
      population: 2148271,
      countryCode: 'fra',
   },
   nantes: {
      coordinates: { lat: 47.218102, lng: -1.5528 },

      country: 'France',
      label: 'Nantes',
      attribution: <a href="https://data.grandlyon.com">data.grandlyon.com</a>,
      measurements: measurements.nantes,
      population: 309346,
      countryCode: 'fra',
   },
   lyon: {
      coordinates: { lat: 45.74846, lng: 4.84671 },
      country: 'France',
      label: 'Lyon',
      attribution: (
         <a href="https://data.nantesmetropole.fr/pages/home/">
            data.nantesmetropole.fr
         </a>
      ),
      measurements: measurements.lyon,
      population: 513275,
      countryCode: 'fra',
   },
   berlin: {
      coordinates: { lat: 52.520008, lng: 13.404954 },
      country: 'Allemagne',
      label: 'Berlin',
      attribution: (
         <a href="https://www.stadtentwicklung.berlin.de/geoinformation/">
            Geoportal Berlin
         </a>
      ),
      measurements: measurements.berlin,
      population: 3769495,
      countryCode: 'deu',
   },
   frankfurt: {
      coordinates: { lat: 50.110924, lng: 8.682127 },
      country: 'Allemagne',
      label: 'Frankfurt',
      attribution: 'Geoportal Frankfurt',
      measurements: measurements.frankfurt,
      population: 753056,
      countryCode: 'deu',
   },
   stuttgart: {
      coordinates: { lat: 48.783333, lng: 9.183333 },
      country: 'Allemagne',
      label: 'Stuttgart',
      attribution: 'Geoportal Stuttgart',
      measurements: measurements.stuttgart,
      population: 634830,
      countryCode: 'deu',
   },
   hamburg: {
      coordinates: { lat: 53.551086, lng: 9.993682 },
      country: 'Allemagne',
      label: 'Hamburg',
      attribution: 'Geoportal Hamburg',
      measurements: measurements.hamburg,
      population: 1899160,
      countryCode: 'deu',
   },
   milan: {
      coordinates: { lat: 45.464664, lng: 9.18854 },
      country: 'Italie',
      label: 'Milan',
      attribution: 'Milan',
      measurements: measurements.milan,
      population: 1404431,
      countryCode: 'ita',
   },
   barcelona: {
      coordinates: { lat: 41.392208, lng: 2.174173 },
      country: 'Espagne',
      label: 'Barcelone',
      attribution: 'Barcelona',
      measurements: measurements.barcelona,
      population: 1620343,
      countryCode: 'esp',
   },
};

export const maxMeasurement = Math.max(
   ...Object.keys(measurements).map((x) =>
      Math.max(measurements[x].covid, measurements[x].normal)
   )
);
console.log(maxMeasurement);

export const spaces = {
   normal: 'KveCwJZV',
   covid: 'sBabvMjt',
};
