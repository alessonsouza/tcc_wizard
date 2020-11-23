'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('user_courses', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false,
     },
     user_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: { model: 'users' , key: 'id'},
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
     },
     course_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {model: 'courses', key: 'id'},
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
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
 return queryInterface.dropTable('user_courses');
 
  }
};
