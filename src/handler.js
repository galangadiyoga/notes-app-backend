const notess = require('./plant');

const postPlantHandler = (request, h) => {
  const {
    name,
    description,
    latinname,
    howtocare,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
  } = request.payload;

  const id = name.replace(/\s+/g, '').toLowerCase();
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const NewPlant = {
    id,
    name,
    description,
    latinname,
    howtocare,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    insertedAt,
    updatedAt,
  };

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan data. Mohon isi nama data',
    });
    response.code(400);
    return response;
  }

  notess.push(NewPlant);

  const isSuccess = notess.filter((notes) => notes.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'data berhasil ditambahkan',
      data: {
        plantId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'data gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getPlantHandler = (request, h) => {
  const plantTemp = notess;
  const { name } = request.query;

  if (name !== undefined) {
    // eslint-disable-next-line no-unused-vars
    const plant = notess.filter((notes) => notes.name.toLowerCase().includes(name.toLowerCase()));

    const response = h.response({
      status: 'success',
      data: {
        notess: notess.map((notes) => ({
          id: notes.id,
          name: notes.name,
          description: notes.description,
          latinname: notes.ingredients,
          howtocare: notes.howtocook,
          first: notes.first,
          second: notes.second,
          third: notes.third,
          fourth: notes.fourth,
          fifth: notes.fifth,
          sixth: notes.sixth,
          seventh: notes.seventh,
          eighth: notes.eighth,
        })),
      },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      plants: plantTemp.map((notes) => ({
        id: notes.id,
        name: notes.name,
        description: notes.description,
        latinname: notes.ingredients,
        howtocare: notes.howtocook,
        first: notes.first,
        second: notes.second,
        third: notes.third,
        fourth: notes.fourth,
        fifth: notes.fifth,
        sixth: notes.sixth,
        seventh: notes.seventh,
        eighth: notes.eighth,
      })),
    },
  });
  response.code(200);
  return response;
};

const getDetailPlantHandler = (request, h) => {
  const { id } = request.params;

  const plant = notess.filter((notes) => notes.id === id)[0];
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

const putPlantHandler = (request, h) => {
  const { id } = request.params;

  const {
    name,
    description,
    latinname,
    howtocare,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
  } = request.payload;

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui data. Mohon isi nama data',
    });
    response.code(400);
    return response;
  }

  const updatedAt = new Date().toISOString();
  const index = notess.findIndex((plant) => plant.id === id);

  if (index !== -1) {
    notess[index] = {
      ...notess[index],
      name,
      description,
      latinname,
      howtocare,
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      updatedAt,
    };

    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
      data: {
        notess,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui data. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

const deletePlantHandler = (request, h) => {
  const { id } = request.params;

  const index = notess.findIndex((idplant) => idplant.id === id);

  if (index !== -1) {
    notess.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'data berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'data gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  postPlantHandler,
  getPlantHandler,
  getDetailPlantHandler,
  putPlantHandler,
  deletePlantHandler,
};
