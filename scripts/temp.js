const fs = require('fs');

const data = [];
const input = require('./data/data.json').features;

fs.writeFile(
   './data/normal.json',
   JSON.stringify(
      {
         type: 'FeatureCollection',
         features: input.filter((x) => !x.properties.covid),
      },
      null,
      3
   ),
   () => console.log('print data')
);

fs.writeFile(
   './data/covid.json',
   JSON.stringify(
      {
         type: 'FeatureCollection',
         features: input.filter((x) => x.properties.covid),
      },
      null,
      3
   ),
   () => console.log('print data')
);
