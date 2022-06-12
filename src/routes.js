const {
  // postPlantHandler,
  getPlantHandler,
  getDetailPlantHandler,
  // putPlantHandler,
  // deletePlantHandler,
} = require('./handler');

const routes = [
  // {
  //  method: 'POST',
  //  path: '/plant',
  //  handler: postPlantHandler,
  // },
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
  // {
  //  method: 'PUT',
  //  path: '/plant/{id}',
  //  handler: putPlantHandler,
  // },
  // {
  //  method: 'DELETE',
  //  path: '/plant/{id}',
  //  handler: deletePlantHandler,
  // },
];

module.exports = routes;
