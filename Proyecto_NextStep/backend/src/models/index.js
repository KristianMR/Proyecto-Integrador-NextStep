require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
    }
);

const usuario = require('./usuario')(sequelize, Sequelize.DataTypes);
const carrera = require('./carrera')(sequelize, Sequelize.DataTypes);
const resultado_test = require('./resultado_test')(sequelize, Sequelize.DataTypes);
const test_vocacional = require('./test_vocacional')(sequelize, Sequelize.DataTypes);
const carrera_sugerida = require('./carrera_sugerida')(sequelize, Sequelize.DataTypes);

// Definición de las asociaciones
resultado_test.belongsTo(usuario, {foreignKey: 'id_usuario'});
resultado_test.belongsTo(test_vocacional, {foreignKey: 'id_test'});

carrera_sugerida.belongsTo(resultado_test, {foreignKey: 'id_resultado'});
carrera_sugerida.belongsTo(carrera, {foreignKey: 'id_carrera'});

// Exportar los modelos
module.exports = {
    sequelize,
    usuario,
    carrera,
    resultado_test,
    test_vocacional,
    carrera_sugerida
};