const fs = require('fs');

const lyon = require('./input-data/lyon/lyon.json').features;
lyon.forEach((feature) => {
   feature.properties = {
      covid: feature.properties.anneelivra === 2020,
      name: feature.properties.nom,
   };
});

const paris = [];
const parisNormal = require('./input-data/paris/paris-normal.json');
parisNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      name: feature.properties.voie,
   };
   if (feature.geometry) {
      paris.push(feature);
   } else {
      console.log(feature);
   }
});

const parisCovid = require('./input-data/paris/paris-covid.json');
parisCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      name: feature.properties.route,
   };
   paris.push(feature);
});

const nantes = [];
const nantesNormal = require('./input-data/nantes/nantes-normal.json');
nantesNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      name: feature.properties.nom,
   };
   nantes.push(feature);
});

const nantesCovid = require('./input-data/nantes/nantes-covid.json');
nantesCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      name: feature.properties.nom,
   };
   nantes.push(feature);
});

fs.writeFile('../src/data/lyon.json', JSON.stringify(lyon, null, 3), () =>
   console.log('print lyon')
);

fs.writeFile('../src/data/paris.json', JSON.stringify(paris, null, 3), () =>
   console.log('print paris')
);

fs.writeFile('../src/data/nantes.json', JSON.stringify(nantes, null, 3), () =>
   console.log('print nantes')
);
