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
            sequelize
        })
    }

    // static associate(models) {
    //     this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});
    // }
}

module.exports = Alunos;