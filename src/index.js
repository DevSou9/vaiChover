const getWeatherCt = require('./Controller/getWeatherCt');
const { app } = require('./server');

app.get('/:city', getWeatherCt.getWeatherCt);
