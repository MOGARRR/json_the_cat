const needle = require('needle');
const args = process.argv;
args.splice(0,2);
const breedName = args[0];

getBreedDescription = (breedName, callback) => {
   needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) =>{
    if (error !== null) {
     return callback(error.code,null);
    } else if (body[0] === undefined){
      return callback(`Cannot find ${breedName}`,null);
    } else { 
      const obj = body[0];
     return callback(null,obj);
    }
   });
}

getBreedDescription(breedName, (error,desc) => {
  return error !== null ? console.log(error) : console.log(desc.description);
});