
const plants = require('./plant');



const getPlantHandler = (request, h) => {
  const plantTemp = plants;
  const { name } = request.query;

  if (name !== undefined) {
    // eslint-disable-next-line no-unused-vars
    const plant = plants.filter(
      (plant) => plant.name.toLowerCase().includes(name.toLowerCase()),
    );

    const response = h.response({
      status: 'success',
      data: {
        notess: plant.map((plant) => ({
          id: plant.id,
          name: plant.name,
          description: plant.description,
          latinname: plant.ingredients,
          howtocare: plant.howtocook,
          first: plant.first,
          second: plant.second,
          third: plant.third,
          fourth: plant.fourth,
          fifth: plant.fifth,
          sixth: plant.sixth,
          seventh: plant.seventh,
          eighth: plant.eighth,
        })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      notess: plantTemp.map((plant) => ({
        id: plant.id,
        name: plant.name,
        description: plant.description,
        latinname: plant.ingredients,
        howtocare: plant.howtocook,
        first: plant.first,
        second: plant.second,
        third: plant.third,
        fourth: plant.fourth,
        fifth: plant.fifth,
        sixth: plant.sixth,
        seventh: plant.seventh,
        eighth: plant.eighth,
      })),
    },
  });
  response.code(200);
  return response;
};

const getDetailPlantHandler = (request, h) => {
  const { id } = request.params;

  const plant = plants.filter((plantTemp) => plantTemp.id === id)[0];
  if (plant !== undefined) {
    return {
      status: 'success',
      data: {
        plant,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'data tidak ditemukan',
  });
  response.code(404);
  return response;
};



module.exports = {
  getPlantHandler,
  getDetailPlantHandler,
};
