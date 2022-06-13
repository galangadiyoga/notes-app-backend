const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async () => {
  const Api = Hapi.server({
    port: 7000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

};

init()
  .then((Api) => {
    console.log('Server berjalan di', Api.info.uri);
  })
  .catch((err) => {
    console.log(err);
  });
