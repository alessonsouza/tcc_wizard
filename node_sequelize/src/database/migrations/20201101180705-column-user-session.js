'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn(
        'users', // NOME TABELA
        'isLogged', // COLUNA A SER CRIADA
        {
          type: Sequelize.BOOLEAN // TIPO DO CAMPO
        }
        
        );
      },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'isLogged',
    );
  }
};
