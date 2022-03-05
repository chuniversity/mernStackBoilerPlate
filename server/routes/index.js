var express = require('express');
const { Router } = require('express');

const namesRoute = require('./names');
const countRoute = require('./count');

const router = Router();

router.use('/name', namesRoute);
router.use('/count', countRoute);

module.exports = router;
