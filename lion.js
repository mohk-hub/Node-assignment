import animal from 'botanic-zoo-api'

animal.getAnimal('tiger')
  .then(response => console.log(response))
  .catch(err => console.error(err))