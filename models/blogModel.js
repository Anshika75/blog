const { Sequelize, QueryTypes } = require('sequelize');
var dbConnection = require('../models/connection');
var sequelize = dbConnection.sequelize;

var Blogs=sequelize.define("blogs",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:Sequelize.STRING,
    short_description:Sequelize.STRING,
  long_description:Sequelize.STRING,
  status: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
});


module.exports = { Blogs };