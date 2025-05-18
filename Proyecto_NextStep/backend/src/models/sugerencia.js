const {DataTypes} = require('sequelizze');
const {sequelize} = require('./index');

const sugerencia = sequelize.define('sugerencia', {
    id_sugerencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_resulado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'resultado_test',
            key: 'id_resultado'
        }
    },
    id_carerra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'carrera',
            key: 'id_carrera'
        }
    }
}, {
    tableName: 'carrera_sugerida',
    timestamps: false
});