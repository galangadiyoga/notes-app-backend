const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const Users = {
  1: {
    id: 1,
    name: 'planT',
  },
};

// eslint-disable-next-line func-names
const validate = async function (decoded) {
  if (Users[decoded.id]) {
    return { isValid: true };
  }
  return { isValid: false };
};

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

  // eslint-disable-next-line global-require
  await Api.register(require('hapi-auth-jwt2'));
  Api.auth.strategy('jwt', 'jwt', { key: 'BurjoSariAsih', validate });

  Api.auth.default('jwt');
  Api.route(routes);

  await Api.start();
  return Api;
};

init()
  .then((Api) => {
    console.log('Server beroperasi di', Api.info.uri);
  })
  .catch((err) => {
    console.log(err);
  });
