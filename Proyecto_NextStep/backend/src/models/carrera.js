module.exports = (sequelize, DataTypes) => {
    return sequelize.define('carrera', {
        id_carrera: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT
        },
    }, {
        tableName: 'carrera',
        timestamps: false
    });
};