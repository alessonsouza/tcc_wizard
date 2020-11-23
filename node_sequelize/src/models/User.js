const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
    static init(sequelize) {
        super.init({
            // aqui coloco os campos que vou mandar/inserir/persistir as informações na tabela do banco de dados.
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            isLogged: DataTypes.BOOLEAN
        }, { 
            sequelize , 
            tableName: 'users',
            hooks: { // faz a criptografia da senha do usuário
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                },
            },
        })
    }

    static associate(models) {
        this.hasMany(models.Address,  { foreignKey: 'user_id', as: 'address'});
        this.belongsToMany(models.Course, {foreignKey: 'user_id', through: 'user_courses', as: 'courses'});
    }

}

module.exports = User;