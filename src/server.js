const express = require('express');

const app = express();
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT || 3001;

app.listen(port);

module.exports = { app };
