const animal = require('botanic-zoo-api')

animal.getAnimal('panther')
  .then(response => console.log(response))
  .catch(err => console.error(err))
