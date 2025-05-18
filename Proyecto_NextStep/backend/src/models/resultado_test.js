const {DataTypes} = require('sequelize');
const {sequelize} = require('./index');

const resultado_test = sequelize.define('resultado_test', {
    id_resultado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'id_usuario'
        }
    },
    id_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'test',
            key: 'id_test'
        }
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    resultado: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'resultado_test',
    timestamps: false
});