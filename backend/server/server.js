const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const apiRouter = require('./api');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
