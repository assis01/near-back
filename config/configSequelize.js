const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const db = new Sequelize({
    username:  process.env.DATABASE_USER,
    database:  process.env.DATABASE_NAME,
    port: '5432',

    password:  process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_URL,
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