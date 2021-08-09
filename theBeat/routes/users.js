var express = require('express');
var router = express.Router();
const {login, loginProcess,register} = require('../controllers/userControllers')

/* GET users listing. */
router.get('/login', login);
router.post('/login', loginProcess);
router.get('/register', register);
module.exports = router;
