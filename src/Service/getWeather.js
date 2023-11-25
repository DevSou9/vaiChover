const axios = require('axios');
const dayjs = require('dayjs');
const { getCoordinates } = require('./Coordinates/getCoordinates');

async function getWeather(city) {
  try {
    const {
      name, state, lat, lon,
    } = await getCoordinates(city);
    if (!name) {
      return { message: 'Cidade não encontrada', status: 404 };
    }

    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=d6bc8870e84681a632a689b9aed54f61`;

    const response = await axios.get(url);
    const weatherResult = response.data;

    const weatherData = weatherResult.daily.map((item) => {
      const dateUnix = item.dt;
      const formattedDate = dayjs.unix(dateUnix).format('DD/MM/YYYY HH:mm:ss');

      return {
        name,
        state,
        data: formattedDate,
        minTemperature: item.temp.min,
        maxTemperature: item.temp.max,
        PossibilityOfRain: `${(item.pop * 100).toFixed(0)}%`,

      };
    });

    return weatherData;
  } catch {
    throw new Error('Erro ao obter o clima');
  }
}

module.exports = { getWeather };
