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
   
    updated_at: {
        field: 'updated_at',
        type: Sequelize.DATE
    },
    created_at: {
        field: 'created_at',
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
