const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = new Sequelize(process.env.DATABASE_URL);
module.exports = db;