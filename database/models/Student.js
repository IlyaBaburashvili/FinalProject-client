const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email:{
    type:Sequelize.STRING,
    allowNull: false
  },

  imgURL:{
    type:Sequelize.STRING,
    allowNull: true
  },

  gpa:{
    type:Sequelize.DOUBLE,
    allowNull: true
  },

});

module.exports = Student;