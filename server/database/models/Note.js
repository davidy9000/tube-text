//	This is how the table of Note is set up
const Sequelize = require('sequelize');
const db = require('../db');

const Note = db.define("note", {
    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    videoTimestamp: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },

    noteRecord: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Note;