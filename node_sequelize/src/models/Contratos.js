const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcryptjs');

class Contratos extends Model {
    static init(sequelize) {
        super.init({
            // aqui coloco os campos que vou mandar/inserir/persistir as informações na tabela do banco de dados.
            aluno_id: DataTypes.INTEGER,
            curso: DataTypes.STRING,
            professor: DataTypes.STRING,
            horario: DataTypes.STRING,
            dia_semana: DataTypes.STRING,
            livro: DataTypes.STRING
        }, { 
            sequelize , 
            tableName: 'contratos',
        })
    }

    static associate(models) {
        this.belongsTo(models.Alunos,  { foreignKey: 'aluno_id', as: 'alunos'});
    }

}

module.exports = Contratos;