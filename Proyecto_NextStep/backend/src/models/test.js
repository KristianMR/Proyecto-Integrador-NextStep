const {DataTypes} = require('sequelize');
const {sequelize} = require('./index');

const test = sequelize.define('test', {
    id_test: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'test_vocacional',
    timestamps: false
});