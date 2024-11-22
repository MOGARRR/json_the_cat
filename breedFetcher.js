const needle = require('needle');
const args = process.argv;
args.splice(0,2);
const query = args[0];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,(error,response,body) =>{
  if (error !== null) {
    return console.log('Request failed. Please try again');
  }

  return getBreed(body[0]);
});

const getBreed = (obj) => {
  if (obj === undefined) {
    return console.log(`Cannot find this breed. Please try another`);
  }
  return console.log(obj.description);
};
