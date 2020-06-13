const fs = require('fs');

const data = [];
const lyon = require('./input-data/lyon/lyon.json').features;
lyon.forEach((feature) => {
   feature.properties = {
      covid: feature.properties.anneelivra === 2020,
      name: feature.properties.nom,
      city: 'lyon',
   };
   data.push(feature);
});

const parisNormal = require('./input-data/paris/paris-normal.json');
parisNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      name: feature.properties.voie,
      city: 'paris',
   };
   if (feature.geometry) {
      data.push(feature);
   } else {
      console.log(feature);
   }
});

const parisCovid = require('./input-data/paris/paris-covid.json');
parisCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      name: feature.properties.route,
      city: 'aris',
   };
   data.push(feature);
});

const nantesNormal = require('./input-data/nantes/nantes-normal.json');
nantesNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      name: feature.properties.nom,
      city: 'nantes',
   };
   data.push(feature);
});

const nantesCovid = require('./input-data/nantes/nantes-covid.json');
nantesCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      name: feature.properties.nom,
      city: 'nantes',
   };
   data.push(feature);
});

fs.writeFile('../src/data/data.json', JSON.stringify(data, null, 3), () =>
   console.log('print data')
);
