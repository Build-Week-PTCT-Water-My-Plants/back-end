const knex = require('knex');
const configs = require('../knexfile');
const envirenment = process.env.NODE_ENV || 'development';

module.exports = knex(configs[environment]);