const {getBreedDescription} = require('./breedFetcher');
const args = process.argv;
args.splice(0,2);
const breedName = args[0];

getBreedDescription(breedName,(error,desc) => {
  if (error !== null) {
    console.log('Error fetch detials:',error);
  } else {
    console.log(desc);
  }
});
