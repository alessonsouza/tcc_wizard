const express = require('express');
const routes = require('./routes');
const cors = require('cors');


require('./database');



const app = express();



app.use(express.json()); //define que a comunicação será via json

 app.use(cors());

 app.use(routes);

app.listen(3000, () => {
    console.log('Servidor rodando!');
});