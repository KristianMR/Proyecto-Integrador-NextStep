module.exports = (sequelize, DataTypes) => {
    return sequelize.define('test_vocacional', {
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
};