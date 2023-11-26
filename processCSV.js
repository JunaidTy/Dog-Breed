const fs = require('fs');
const csv = require('csv-parser');

const inputFile = '2017.csv';

const breedsSet = new Set();

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const breed = row.Breed.toLowerCase().replace(/\s/g, '');
    breedsSet.add(breed);
  })
  .on('end', () => {
    const breedsArray = Array.from(breedsSet);
    console.log(breedsArray);
  });
