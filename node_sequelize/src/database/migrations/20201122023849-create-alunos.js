'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    idade: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    pai: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    mae: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alunos');

  }
};
