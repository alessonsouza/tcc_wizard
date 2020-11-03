const express = require('express');
const routes = require('./routes');

require('./database');



const app = express();

app.use(express.json()); //define que a comunicação será via json

app.use(routes);

app.listen(3000);