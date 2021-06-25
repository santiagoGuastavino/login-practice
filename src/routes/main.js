let express = require('express');
let router = express.Router();
let { check } = require('express-validator')
let mainController = require('../controllers/mainController');

let validations = [
    check('name')
        .notEmpty().withMessage('Debes completar éste campo').bail(),
    check('color')
        .not().contains('#ffffff').withMessage('Debes elegir un color').bail(),
    check('email')
        .notEmpty().withMessage('Debes completar éste campo').bail()
        .normalizeEmail().isEmail().withMessage('Debes ingresar una dirección de e-mail válida').bail(),
    check('age')
        .notEmpty().withMessage('Debes completar éste campo').bail()
        .isInt().withMessage('Debes completar con un número').bail(),
];

router.get('/', mainController.home);
router.post('/', validations, mainController.user);  
router.get('/reset', mainController.reset);
router.get('/thanks', mainController.thanks);

module.exports = router;