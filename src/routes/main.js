let express = require('express');
let router = express.Router();
let mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.post('/', mainController.user);  

module.exports = router;