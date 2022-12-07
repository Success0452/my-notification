const express = require('express');
const route = express.Router();

const { startNotification, startSingleNotification } 
= require('../controller/notify');

route.route('/notification').post( startNotification );
route.route('/single').post( startSingleNotification );
module.exports = route;
