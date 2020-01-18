//	This is how the table of Note is set up
const Sequelize = require('sequelize');
const db = require('../db');

const Note = db.define("note", {
    
    noteId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    vidTimestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    noteRecord: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Note;