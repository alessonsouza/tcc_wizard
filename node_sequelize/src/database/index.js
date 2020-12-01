// conxexão com o banco de dados acontece aqui

const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const dbConfig = require('../config/database.js');
const User = require('../models/User');
const Address = require('../models/Address');
const Course = require('../models/Course');
const Aluno = require('../models/Alunos');
const Contratos = require('../models/Contratos');

const  connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Course.init(connection);
Aluno.init(connection);
Contratos.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Course.associate(connection.models);
Contratos.associate(connection.models);

module.exports = connection;

