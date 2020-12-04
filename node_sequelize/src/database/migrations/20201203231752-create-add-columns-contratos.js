'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
      'contratos', // NOME TABELA
      'observacoes', // COLUNA A SER CRIADA
      {
        type: Sequelize.STRING // TIPO DO CAMPO
      } 
      ),
      queryInterface.addColumn(
        'contratos', // NOME TABELA
        'dataInicio', // COLUNA A SER CRIADA
        {
          type: Sequelize.DATE // TIPO DO CAMPO
        } 
        ),
        queryInterface.addColumn(
          'contratos', // NOME TABELA
          'dataFim', // COLUNA A SER CRIADA
          {
            type: Sequelize.DATE // TIPO DO CAMPO
          } 
          ),
    ]},

  down: async (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
      'contratos', // NOME TABELA
      'observacoes', // COLUNA A SER CRIADA
      ),
      queryInterface.removeColumn(
        'contratos', // NOME TABELA
        'dataInicio', // COLUNA A SER CRIADA
        ),
        queryInterface.removeColumn(
          'contratos', // NOME TABELA
          'dataFim', // COLUNA A SER CRIADA
          ),
    ]
  }
};
