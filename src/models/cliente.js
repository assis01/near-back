'use strict';
const sequelize = require('../../config/configSequelize');
const Sequelize = require('sequelize');
const CLIENTE = sequelize.define(
    'cliente', {
    id: {
        field: 'id',
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true
    },
    nome: {
        field: 'nome',
        type: Sequelize.STRING
    },
   
    createdAt: {
        field: 'createdAt',
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'updatedAt',
        type: Sequelize.DATE
    }
},
    {
        tableName: 'cliente',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    },
);

module.exports = CLIENTE;
