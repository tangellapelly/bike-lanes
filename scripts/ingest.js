const fs = require('fs');

const data = [];
const lyon = require('./input-data/lyon/lyon.json').features;
lyon.forEach((feature) => {
   feature.properties = {
      covid: feature.properties.anneelivra === 2020,
      city: 'lyon',
   };
   data.push(feature);
});

const parisNormal = require('./input-data/paris/paris-normal.json');
parisNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
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
      city: 'aris',
   };
   data.push(feature);
});

const nantesNormal = require('./input-data/nantes/nantes-normal.json');
nantesNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,

      city: 'nantes',
   };
   data.push(feature);
});

const nantesCovid = require('./input-data/nantes/nantes-covid.json');
nantesCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      city: 'nantes',
   };
   data.push(feature);
});

const berlinCovid = require('./input-data/berlin/berlin-covid.json');
berlinCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      city: 'berlin',
   };
   data.push(feature);
});

const berlinNormal = require('./input-data/berlin/berlin-normal.json');
berlinNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      city: 'berlin',
   };
   data.push(feature);
});

const frankfurtCovid = require('./input-data/frankfurt/frankfurt-covid.json');
frankfurtCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      city: 'frankfurt',
   };
   data.push(feature);
});

const frankfurtNormal = require('./input-data/frankfurt/frankfurt-normal.json');
frankfurtNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      city: 'frankfurt',
   };
   data.push(feature);
});

/**
 * Hamburg
 */
const hamburgCovid = require('./input-data/hamburg/hamburg-covid.json');
hamburgCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      city: 'hamburg',
   };
   data.push(feature);
});

const hamburgNormal = require('./input-data/hamburg/hamburg-normal.json');
hamburgNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      city: 'hamburg',
   };
   data.push(feature);
});

/**
 * Stuttgart
 */
const stuttgartCovid = require('./input-data/stuttgart/stuttgart-covid.json');
stuttgartCovid.features.forEach((feature) => {
   feature.properties = {
      covid: true,
      city: 'stuttgart',
   };
   data.push(feature);
});

const stuttgartNormal = require('./input-data/stuttgart/stuttgart-normal.json');
stuttgartNormal.features.forEach((feature) => {
   feature.properties = {
      covid: false,
      city: 'stuttgart',
   };
   data.push(feature);
});

fs.writeFile(
   './data/covid.json',
   JSON.stringify(
      {
         type: 'FeatureCollection',
         features: data.filter((x) => x.properties.covid),
      },
      null,
      3
   ),
   () => console.log('print covid data')
);

fs.writeFile(
   './data/normal.json',
   JSON.stringify(
      {
         type: 'FeatureCollection',
         features: data.filter((x) => !x.properties.covid),
      },
      null,
      3
   ),
   () => console.log('print normal data')
);
