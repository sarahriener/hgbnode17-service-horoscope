'use strict';

const express = require('express');
const service = express();
const request = require('superagent');


module.exports = (config) => {
    const log = config.log();

    service.get('/service/:sunsign', (req, res, next) => {

        //request.get(`${config.horoscopeApiBaseUrl}/today/${req.params.sunsign}`)
        request.get(`http://horoscope-api.herokuapp.com/horoscope/today/${req.params.sunsign}`)
            .end((err, result) => {
                if(err) {
                    return next(err);
                }

                const horoscope = result.body.horoscope;

                return res.json( { result: horoscope } );
            });
    });

    return service;
};