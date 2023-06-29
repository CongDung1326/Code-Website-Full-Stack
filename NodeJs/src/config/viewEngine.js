const express = require("express");
const { config } = require("../../.sequelizerc");

let configViewEngine = (app) => {
    app.use(express.static('./src/public')); // Public folder
    app.set('view engine', 'ejs'); // Use logic (for,if,...) in html
    app.set('views', './src/views'); // Setting views for html
};

module.exports = configViewEngine;