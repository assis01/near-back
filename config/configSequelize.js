
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = new Sequelize(process.env.DATABASE_URL, {

    dialect: 'postgres',
    operatorsAliases: Op,
    define: {
        underscored: false,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: true
    }
  });
module.exports = db;