const getBreedDescription = require('./breedFetcher');
const args = process.argv;
args.splice(0,2);
const breedName = args[0];

getBreedDescription(breedName,(error,desc) => {

});
// getBreedDescription(userInput, (error,desc) => {
//   return error !== null ? console.log(error) : console.log(desc.description);
// });
