const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome do banco', 'root', 'senhaDeConexãoAoMySql', {
    host: 'localhost',
    dialect: 'mysql',
});