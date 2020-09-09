const sequelize = require('./connection')

    async function test () {
        try {
            await sequelize.authenticate();
            console.log('Banco de dados inciiado com suceso');
        } catch (error) {
            console.error('Erro ao iniciar BD', error);
        }
    }

    module.exports = test