const {
  getPlantHandler,
  getDetailPlantHandler,
} = require('./handler');

const routes = [
  
  {
    method: 'GET',
    path: '/plant',
    config: { auth: 'jwt' },
    handler: getPlantHandler,
  },
  {
    method: 'GET',
    path: '/plant/{id}',
    config: { auth: 'jwt' },
    handler: getDetailPlantHandler,
  },
  
];

module.exports = routes;
