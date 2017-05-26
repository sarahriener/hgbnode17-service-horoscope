'use strict';

// maps our .env file into process.env
require('dotenv').config();
const bunyan = require('bunyan');

const log = {
    development: () => {
        return bunyan.createLogger({
            name: 'service-horoscope-dev',
            level: 'debug'
        });
    },
    production: () => {
        return bunyan.createLogger({
            name: 'service-horoscope-prod',
            level: 'info'
        });
    },
    test: () => {
        return bunyan.createLogger({
            name: 'service-horoscope-test',
            level: 'fatal'
        });
    }
};

/**
 * As a default, everything is privavte
 * Export functions to make it public
 */
module.exports = {

    horoscopeApiBaseUrl: process.env.HOROSCOPE_API_BASE_URL,

    log: (env) => {
        if(env) return log[env]();

        return log[process.env.NODE_ENV || 'development']();
    }

}