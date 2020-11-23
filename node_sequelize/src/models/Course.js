const {Model, DataTypes} = require('sequelize');

class Course extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },{
            sequelize,
            tableName: 'courses'// força que a tabela seja com esse nome
        })

    }

    static associate(models) {
        this.belongsToMany(models.User, {foreignKey:'course_id', through: 'user_courses', as: 'users'});
    }
}

module.exports = Course;