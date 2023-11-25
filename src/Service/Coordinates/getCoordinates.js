const axios = require('axios');
const { filterData } = require('./filterData');
const { filterChar } = require('./filterChar');

const getCoordinates = async (city) => {
  this.city = filterChar(city);

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=d6bc8870e84681a632a689b9aed54f61`;

  try {
    const result = await axios.get(url);

    if (!result.data.length) {
      const resultado = {};
      return resultado;
    }

    const {
      name, state, country, lat, lon,
    } = filterData(result.data[0]);

    return {
      name, state, country, lat, lon,
    };
  } catch {
    throw new Error('Erro ao obter as coordenadas');
  }
};
module.exports = { getCoordinates };
