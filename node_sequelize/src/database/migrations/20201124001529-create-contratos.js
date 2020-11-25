'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'alunos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      curso: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      professor: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
      horario: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dia_semana: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      livro: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable('contratos');
  }
};
