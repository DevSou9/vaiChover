const { getWeather } = require('../Service/getWeather');

exports.getWeatherCt = async (req, res) => {
  try {
    const { city } = req.params;

    const result = await getWeather(city);
    if (result.status === 404) {
      return res.status(404).send(result.message);
    }
    return res.status(200).send(result);
  } catch (error) {
    throw new Error(`Erro ao obter o clima ${error.message}`);
  }
};
