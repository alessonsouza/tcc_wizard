// conxexão com o banco de dados acontece aqui

const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const dbConfig = require('../config/database.js');
const User = require('../models/User');
const Address = require('../models/Address');
const Course = require('../models/Course');


const  connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Course.init(connection);


User.associate(connection.models);
Address.associate(connection.models);
Course.associate(connection.models);

// try {
//     connection.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database: ' , error);
// }
//  User.create({name: 'Jose', email: 'josen@d2wdigital.com.br', password: '1234'});
module.exports = connection;

