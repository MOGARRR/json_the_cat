const needle = require('needle');

const getBreedDescription = (breedName, callback) => {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response,body) =>{
    if (error !== null) {
      return callback(error.code,null);
    } else if (body[0] === undefined) {
      return callback(`Cannot find ${breedName}`,null);
    } else {
      const obj = body[0];
      return callback(null,obj.description);
    }
  });
};

module.exports = {getBreedDescription};