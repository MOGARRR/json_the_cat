const {getBreedDescription} = require('../breedFetcher');
const {assert} = require('chai');


describe('#getBreedDescription', () => {
  it('returns a string description for a vaild breed, via callback', (done) =>{
    getBreedDescription('Siberian',(err,desc) => {
      assert.equal(err,null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns a error for a invaild breed, via callback', (done) =>{
    getBreedDescription('Siberianasdas',(err,desc) => {
      assert.equal(desc,null);
      const expectedError = 'Cannot find Siberianasdas';
      assert.equal(expectedError,err);
      done();
    });
  });
});