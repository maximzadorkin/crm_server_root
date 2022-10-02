const express = require('express');
const { ROUTES } = require('./routes.js');

const vkModule = () => {
    const router = express.Router();

    ROUTES.forEach(({ method, handlers }) => (
        handlers.forEach(({ path, callback }) => {
            router[method](path, callback);
        })
    ));

    return router;
};

module.exports = vkModule();
