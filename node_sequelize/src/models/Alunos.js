const { Model, DataTypes } = require('sequelize');

class Alunos extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            idade: DataTypes.STRING,
            cpf: DataTypes.STRING,
            mae: DataTypes.STRING,
            pai: DataTypes.STRING,
        } , {
            sequelize,
            tableName: 'alunos'
        })
    }

    static associate(models) {
        this.hasMany(models.Contratos, {foreignKey: 'aluno_id', as: 'contratos'});
    }
}

module.exports = Alunos;