const fs = require('fs');
const length = require('@turf/length').default;

const cities = [
   'barcelona',
   'berlin',
   'frankfurt',
   'hamburg',
   'milan',
   'munich',
   'nantes',
   'paris',
   'stuttgart',
   'london',
];

const measurements = {};
cities.forEach((city) => {
   measurements[city] = {
      covid: 0,
      normal: 0,
   };
});
measurements.lyon = {
   covid: 0,
   normal: 0,
};

const data = [];
const lyon = require('./input-data/lyon/lyon.json').features;

lyon.forEach((feature) => {
   feature.properties = {
      covid: feature.properties.anneelivra === 2020,
      city: 'lyon',
   };
   data.push(feature);

   if (feature.properties.covid) {
      measurements.lyon.covid += length(feature);
   } else {
      measurements.lyon.normal += length(feature);
   }
});

cities.forEach((city) => {
   require(`./input-data/${city}/${city}-normal.json`).features.forEach(
      (feature) => {
         feature.properties = {
            covid: false,
            city,
         };
         if (feature.geometry) {
            data.push(feature);
            measurements[city].normal += length(feature);
         }
      }
   );

   require(`./input-data/${city}/${city}-covid.json`).features.forEach(
      (feature) => {
         feature.properties = {
            covid: true,
            city,
         };
         if (feature.geometry) {
            data.push(feature);
            measurements[city].covid += length(feature);
         }
      }
   );
});

console.log(measurements);
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

fs.writeFile(
   '../src/data/measurements.json',
   JSON.stringify(measurements, null, 3),
   () => console.log('print measurements')
);
