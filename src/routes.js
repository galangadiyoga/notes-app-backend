const {
  getPlantHandler,
  getDetailPlantHandler,
} = require('./handler');

const routes = [
  
  {
    method: 'GET',
    path: '/plant',    
    handler: getPlantHandler,
  },
  {
    method: 'GET',
    path: '/plant/{id}',
    handler: getDetailPlantHandler,
  },
  
];

module.exports = routes;
