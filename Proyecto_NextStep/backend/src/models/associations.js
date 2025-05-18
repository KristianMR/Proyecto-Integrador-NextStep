const usuario = require('./usuario');
const carrera = require('./carrera');
const resultado_test = require('./resultado_test');
const test_vocacional = require('./test_vocacional');
const carrera_sugerida = require('./carrera_sugerida');

// Definición de las asociaciones
resultado_test.belongsTo(usuario, {foreingKey: 'id_usuario'});
resultado_test.belongsTo(test_vocacional, {foreingKey: 'id_test'});

carrera_sugerida.belongsTo(resultado_test, {foreingKey: 'id_resultado'});
carrera_sugerida.belongsTo(carrera, {foreingKey: 'id_carrera'});

// Exportar los modelos
module.exports = {
    usuario,
    carrera,
    resultado_test,
    test_vocacional,
    carrera_sugerida
};